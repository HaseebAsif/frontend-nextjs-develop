import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  concat,
  DefaultOptions
} from '@apollo/client';
import { onError, ErrorResponse } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { ServerError } from '@apollo/client/link/utils';
import { Store } from '@reduxjs/toolkit';
import { withScope, captureMessage } from '@sentry/nextjs';
import { createUploadLink } from 'apollo-upload-client';

import { environment } from 'api/environment';
import introspectionResult from 'graphql/introspection-result.json';
import { getRefreshToken, getToken, logoutStart, setToken } from 'redux/auth';
import { RefreshTokenDocument } from 'types/graphql';

export const cache = new InMemoryCache({
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies: {
    User: {
      merge: true
    },
    Book: {
      keyFields: ['id', 'createdAt']
    },
    Tracking: {
      keyFields: ['id']
    }
  }
});

const uploadHttpLink = createUploadLink({ uri: `${environment.uri}` });

/**
 * Inject the authentication token into the requests made by apollo
 *
 * @type {ApolloLink}
 */
const authMiddleware = (store: Store) =>
  new ApolloLink((operation, forward) => {
    const token = getToken(store.getState());
    if (token) {
      operation.setContext({
        headers: {
          authorization: `jwt ${token}`
        }
      });
    } else {
      operation.setContext({
        headers: {}
      });
    }

    return forward(operation);
  });

/**
 * Checks the incoming error from the Apollo client and if it's a 401 attempts
 * to refresh the token
 *
 * @type {ApolloLink}
 */
const errorHandler = (reduxStore: Store) => {
  return onError((err: ErrorResponse) => {
    const { networkError, operation, graphQLErrors, forward } = err;

    // Notify via sentry if something breaks
    if (networkError?.message !== 'Network request failed') {
      withScope((scope) => {
        scope.setExtra('exception', err);
        scope.setExtra('operation', operation);
        scope.setExtra('graphQLErrors', graphQLErrors);

        const opName = operation.operationName
          ? operation.operationName
          : 'unknown operation';

        captureMessage(`Apollo error: ${opName}`, 'error');
      });
    }

    if ((networkError as ServerError)?.statusCode === 401) {
      const refreshToken = getRefreshToken(reduxStore.getState());
      if (!refreshToken) {
        reduxStore.dispatch({ type: logoutStart.type });
      }
      new ApolloClient({
        cache: new InMemoryCache(),
        link: uploadHttpLink
      })
        .mutate({
          mutation: RefreshTokenDocument,
          variables: { token: refreshToken }
        })
        .then(({ data }) => {
          if (data?.refreshToken) {
            reduxStore.dispatch({
              type: setToken.type,
              payload: {
                token: data?.refreshToken.jwt,
                refreshToken: data?.refreshToken.refreshToken
              }
            });

            operation.setContext({
              headers: {
                authorization: `jwt ${data?.refreshToken.jwt}`
              }
            });

            forward(operation);
          }
        })
        .catch(() => {
          // don't import the logout action since that will cause a circular
          // dependency
          reduxStore.dispatch({ type: logoutStart.type });
        });
    }
  });
};

const retryLink = new RetryLink({
  attempts: { max: 2 }
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all'
  },
  mutate: {
    errorPolicy: 'all'
  }
};

// eslint-disable-next-line import/no-mutable-exports
export let apolloClient: ApolloClient<any>;
export const factory = (reduxStore: Store) => {
  apolloClient = new ApolloClient({
    cache,
    link: retryLink.concat(
      errorHandler(reduxStore).concat(
        concat(
          authMiddleware(reduxStore),
          uploadHttpLink as unknown as ApolloLink
        )
      )
    ),
    defaultOptions
  });

  return apolloClient;
};

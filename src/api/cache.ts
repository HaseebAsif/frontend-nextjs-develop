import { InMemoryCache } from '@apollo/client';

import introspectionResult from 'graphql/introspection-result.json';

export const cache = new InMemoryCache({
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies: {
    User: {
      merge: true
    }
  }
});

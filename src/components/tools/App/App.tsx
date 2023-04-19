import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { IntercomProvider } from 'react-use-intercom';
import { PersistGate } from 'redux-persist/integration/react';

import { factory } from 'api/apollo';
import { SEO } from 'components/tools';
import { Layout } from 'components/ui/general';
import { ProgressBar } from 'components/ui/router';
import { messages } from 'lang';
import { store, persistor } from 'redux/store';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider messages={messages.sv} locale="sv" defaultLocale="sv">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={factory(store)}>
            <IntercomProvider appId="k3duds5g">
              <SEO />
              <ProgressBar />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </IntercomProvider>
          </ApolloProvider>
        </PersistGate>
      </Provider>
    </IntlProvider>
  );
};

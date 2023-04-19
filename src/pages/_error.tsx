import { captureUnderscoreErrorException } from '@sentry/nextjs';
import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';

import { Error } from 'components/ui/router';

export default ({ statusCode }: ErrorProps) => {
  return <Error statusCode={statusCode || 404} />;
};

export const getInitialProps = async (contextData: NextPageContext) => {
  // In case this is running in a serverless function, await this in order to
  // give Sentry time to send the error before the lambda exits
  await captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData);
};

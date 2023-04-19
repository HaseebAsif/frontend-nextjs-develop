import { init } from '@sentry/nextjs';
import { BrowserTracing } from '@sentry/tracing';

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
const isBuild = process.env.NODE_ENV === 'production';

if (dsn && isBuild) {
  init({
    dsn,
    release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    tracesSampleRate: 1.0,
    integrations: [new BrowserTracing()]
  });
}

const { withSentryConfig } = require('@sentry/nextjs');

const isBuild = process.env.NODE_ENV === 'production';
const withSentry = process.env.NEXT_PUBLIC_SENTRY_DSN && isBuild;

const nextConfig = {
  output: 'standalone',
  i18n: {
    locales: ['sv'],
    defaultLocale: 'sv'
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGES_DOMAINS?.split(',') || []
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = withSentry
  ? withSentryConfig(
      {
        ...nextConfig,
        sentry: {
          hideSourceMaps: true
        }
      },
      {
        authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
        silent: true
      }
    )
  : nextConfig;

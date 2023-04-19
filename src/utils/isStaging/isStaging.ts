export const isStaging = (): boolean =>
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging';

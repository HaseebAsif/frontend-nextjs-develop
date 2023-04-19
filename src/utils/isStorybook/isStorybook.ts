export const isStorybook = (): boolean =>
  process.env.NEXT_PUBLIC_ENVIRONMENT === 'storybook';

import { Highlight } from 'types/graphql';

export const getIdFromCfi = (highlights: Highlight[], cfi: any) => {
  return highlights.filter((highlight) => highlight.highlight === cfi)[0].id;
};

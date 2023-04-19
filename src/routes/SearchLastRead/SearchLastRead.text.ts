import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  seo: {
    id: 'SearchLastRead.seo',
    description: 'SEO for route',
    defaultMessage: 'Senast lästa'
  },
  title: {
    id: 'SearchLastRead.title',
    description: 'TItle for Last read page',
    defaultMessage: 'Senast lästa'
  },
  searchPlaceholder: {
    id: 'SearchLastRead.searchPlaceholder',
    description: 'Placeholder for search field',
    defaultMessage: 'Sök bland senast lästa böcker'
  },
  noResults: {
    id: 'SearchLastRead.noResults',
    description: 'Text when no search results found',
    defaultMessage: 'Inga senast lästa böcker hittades'
  }
});

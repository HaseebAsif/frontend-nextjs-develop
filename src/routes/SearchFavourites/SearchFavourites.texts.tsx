import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  seo: {
    id: 'SearchFavourites.seo',
    description: 'SEO for route',
    defaultMessage: 'Mina böcker'
  },
  title: {
    id: 'SearchFavourites.title',
    description: 'Title for My books page',
    defaultMessage: 'Mina böcker'
  },
  searchPlaceholder: {
    id: 'SearchFavourites.searchPlaceholder',
    description: 'Placeholder for search field',
    defaultMessage: 'Sök bland mina böcker'
  },
  noResults: {
    id: 'SearchFavourites.noResults',
    description: 'Text when no search results found',
    defaultMessage: 'Inga favoriter hittades.'
  }
});

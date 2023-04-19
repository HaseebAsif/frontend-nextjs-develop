import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  seo: {
    id: 'SearchBooks.seo',
    description: 'Title of search results',
    defaultMessage: 'Sök'
  },
  title: {
    id: 'SearchBooks.title',
    description: 'Search for books',
    defaultMessage: 'Sökresultat:'
  },
  noResults: {
    id: 'SearchBooks.noResults',
    description: 'Text when no search results found',
    defaultMessage:
      'Hoppsan, här var det tomt!\nVi får hela tiden in fler böcker - berätta gärna för oss vilken eller vilka böcker du behöver så försöker vi få in dem så snart som möjligt, så meddelar vi dig när din bok finns tillgänglig.'
  }
});

import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  placeholder: {
    id: 'BooksSorting.placeholder',
    description: 'Placeholder',
    defaultMessage: 'Sortera efter:'
  },
  sortingTitles: {
    id: 'BooksSorting.sortingTitles',
    description: 'Sorting label for titles',
    defaultMessage: 'Titlar A-Ö'
  },
  sortingAuthors: {
    id: 'BooksSorting.sortingAuthors',
    description: 'Sorting label for authors',
    defaultMessage: 'Författare A-Ö'
  },
  lastPublished: {
    id: 'BooksSorting.lastPublished',
    description: 'Sorting label for last published',
    defaultMessage: 'Senast utgiven'
  }
});

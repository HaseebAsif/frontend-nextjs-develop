import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  searchPlaceholder: {
    id: 'HeaderSearchField.searchPlaceholder',
    description: 'Placeholder for search field',
    defaultMessage: 'Titel, författare eller ISBN'
  },
  emptyValidation: {
    id: 'HeaderSearchField.emptyValidation',
    description: 'Validation message when search field is empty',
    defaultMessage: 'Obligatorisk'
  }
});

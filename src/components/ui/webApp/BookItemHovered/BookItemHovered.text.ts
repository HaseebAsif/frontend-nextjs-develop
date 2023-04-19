import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  readBookLabel: {
    id: 'BookItemHovered.readBookLabel',
    description: 'Label for read book button',
    defaultMessage: 'Läs'
  },
  favouriteRemoved: {
    id: 'BookItemHovered.favouriteRemoved',
    description: 'Message for favourite removed in toast',
    defaultMessage: 'Boken är borttagen från dina favoriter'
  },
  favouriteAdded: {
    id: 'BookItemHovered.favouriteAdded',
    description: 'Message for favourite added in toast',
    defaultMessage: 'Boken är tillagd i dina favoriter'
  }
});

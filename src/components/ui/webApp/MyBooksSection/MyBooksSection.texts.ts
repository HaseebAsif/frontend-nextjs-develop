import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  lastRead: {
    id: 'MyBooksSection.lastRead',
    description: 'Headline of last read books',
    defaultMessage: 'Senast lästa'
  },
  myLibrary: {
    id: 'MyBooksSection.myLibrary',
    description: 'Headline of box with books from my library',
    defaultMessage: 'Mina böcker'
  },
  lastReadInfo: {
    id: 'MyBooksSection.lastReadInfo',
    description: 'Info text of last read books section',
    defaultMessage:
      'Här samlas dina senast lästa böcker. Sätt igång genom att söka fram en bok i fältet ovan.'
  },
  myLibraryInfo: {
    id: 'MyBooksSection.myLibraryInfo',
    description: 'Info text of my library section',
    defaultMessage:
      'Du kan spara dina favoritböcker i ditt bibliotek genom att klicka på: '
  }
});

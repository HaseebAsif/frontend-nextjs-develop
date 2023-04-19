import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  title: {
    id: 'RequestBook.title',
    description: 'Title of ask for book form',
    defaultMessage: 'Efterfråga bok'
  },
  titleLabel: {
    id: 'RequestBook.titleLabel',
    description: 'Label for titel',
    defaultMessage: 'Titel'
  },
  isbnLabel: {
    id: 'RequestBook.isbnLabel',
    description: 'Label for ISBN',
    defaultMessage: 'ISBN'
  },
  emailLabel: {
    id: 'RequestBook.emailLabel',
    description: 'Label for email field in contact form',
    defaultMessage: 'Din e-postadress'
  },
  buttonLabel: {
    id: 'RequestBook.buttonLabel',
    description: 'Label of submit button',
    defaultMessage: 'Skicka'
  },
  emptyValidation: {
    id: 'RequestBook.emptyValidation',
    description: 'Validation message when empty field',
    defaultMessage: 'Obligatorisk'
  },
  successMessage: {
    id: 'RequestBook.successMessage',
    description: 'Message when email is successfully sent',
    defaultMessage:
      'Tack för att du tog dig tid att efterfråga en bok!\nGenom att efterfråga specifika böcker så förser du oss och förlagen med värdefull information och du hjälper på så vis till i vårt arbete med att få in fler böcker.\nVi kommer höra av oss till dig när vi fått in boken som du efterfrågar. Tack för din hjälp och ditt tålamod!'
  },
  errorMessage: {
    id: 'RequestBook.errlrMessage',
    description: 'Message when sending email fails',
    defaultMessage: 'Något gick fel, ditt meddelande skickades inte.'
  },
  buttonBackToHome: {
    id: 'RequestBook.buttonBackToSearch',
    description: 'Message when showing button option back to searches',
    defaultMessage: 'Tillbaka till startsidan'
  },
  buttonRequestNew: {
    id: 'RequestBook.buttonRequestNew',
    description: 'Message when showing button for redo request',
    defaultMessage: 'Efterfråga en till bok'
  }
});

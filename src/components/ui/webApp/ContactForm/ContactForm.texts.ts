import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  title: {
    id: 'ContactForm.title',
    description: 'Title of contact form',
    defaultMessage: 'Kontakta oss'
  },
  buttonLabel: {
    id: 'ContactForm.buttonLabel',
    description: 'Label of submit button',
    defaultMessage: 'Skicka'
  },
  newQuestionButton: {
    id: 'ContactForm.newQuestionButton',
    description: 'Label of new question button',
    defaultMessage: 'Ställ en ny fråga'
  },
  emptyValidation: {
    id: 'ContactForm.emptyValidation',
    description: 'Validation message when empty field',
    defaultMessage: 'Obligatorisk'
  },
  nameLabel: {
    id: 'ContactForm.nameLabel',
    description: 'Label for name field in contact form',
    defaultMessage: 'Namn'
  },
  emailLabel: {
    id: 'ContactForm.emailLabel',
    description: 'Label for email field in contact form',
    defaultMessage: 'Din e-postadress'
  },
  categoryLabel: {
    id: 'ContactForm.categoryLabel',
    description: 'Label for category drop down in contact form',
    defaultMessage: 'Rubrik'
  },
  messageLabel: {
    id: 'ContactForm.messageLabel',
    description: 'Label for message text area in contact form',
    defaultMessage: 'Meddelande'
  },
  categoryLabelOne: {
    id: 'ContactForm.categoryLabelOne',
    description: 'Label for category one in drop down in contact form',
    defaultMessage: 'Konto'
  },
  categoryLabelTwo: {
    id: 'ContactForm.categoryLabelTwo',
    description: 'Label for category two in drop down in contact form',
    defaultMessage: 'Abonnemang'
  },
  categoryLabelThree: {
    id: 'ContactForm.categoryLabelThree',
    description: 'Label for category three in drop down in contact form',
    defaultMessage: 'Tekniska problem'
  },
  categoryLabelFour: {
    id: 'ContactForm.categoryLabelFour',
    description: 'Label for category four in drop down in contact form',
    defaultMessage: 'Böcker'
  },
  categoryLabelFive: {
    id: 'ContactForm.categoryLabelFive',
    description: 'Label for category five in drop down in contact form',
    defaultMessage: 'Övrigt'
  },
  successMessage: {
    id: 'ContactForm.successMessage',
    description: 'Message when email is successfully sent',
    defaultMessage:
      'Vi har tagit emot ditt meddelande och återkommer så snart vi kan'
  },
  failMessage: {
    id: 'ContactForm.failMessage',
    description: 'Message when sending email fails',
    defaultMessage: 'Något gick fel, ditt meddelande skickades inte.'
  }
});

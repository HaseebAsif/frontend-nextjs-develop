import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  emailLabel: {
    id: 'EmailForm.emailLabel',
    description: 'Label for input email',
    defaultMessage: 'E-post'
  },
  newsletterLabel: {
    id: 'EmailForm.subscribeLabel',
    description: 'Subscribe to newsletter input',
    defaultMessage:
      'Jag vill också få nyhetsbrev från Booksquare för att underlätta mina studier.'
  },
  termsText: {
    id: 'EmailForm.termsText',
    description: 'Text for terms and conditions input',
    defaultMessage:
      'Genom att anmäla intresse tillåter du att vi sparar dina uppgifter. Läs mer om hur vi hanterar dina uppgifter och integritet '
  },
  termsLink: {
    id: 'EmailForm.termsLink',
    description: 'Text for terms and conditions link',
    defaultMessage: 'här.'
  },
  submitButton: {
    id: 'EmailForm.submitButton',
    description: 'Label for submit button',
    defaultMessage: 'Anmäl intresse'
  },
  submitError: {
    id: 'EmailForm.submitError',
    description: 'Text for submit error',
    defaultMessage: 'Något gick fel, försök igen'
  }
});

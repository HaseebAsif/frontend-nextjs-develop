import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  title: {
    id: 'ForgotPassword.title',
    description: 'Title',
    defaultMessage: 'Återställ lösenord'
  },
  email: {
    id: 'ForgotPassword.email',
    description: 'Email placeholder',
    defaultMessage: 'E-postadress'
  },
  info: {
    id: 'ForgotPassword.info',
    description: 'View info text',
    defaultMessage: 'Skriv in din e-postadress för att återställa ditt lösenord'
  },
  restoreLabel: {
    id: 'ForgotPassword.restoreLabel',
    description: 'Label for restore password button',
    defaultMessage: 'Återställ konto'
  },
  response: {
    id: 'ForgotPassword.response',
    description: 'Message when click to send email',
    defaultMessage:
      'Om e-postadressen finns registrerad har ett mail skickats för att återställa lösenordet'
  },
  emptyValidation: {
    id: 'ForgotPassword.emptyValidation',
    description: 'Message when field is empty',
    defaultMessage: 'Obligatoriskt'
  }
});

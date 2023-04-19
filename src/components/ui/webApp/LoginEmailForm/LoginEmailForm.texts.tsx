import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  emailLabel: {
    id: 'LoginEmail.emailLabel',
    description: 'Label for email field',
    defaultMessage: 'E-postadress'
  },
  passwordLabel: {
    id: 'LoginEmail.passwordLabel',
    description: 'Label for password field',
    defaultMessage: 'Lösenord'
  },
  submitButton: {
    id: 'LoginEmail.submitButton',
    description: 'Label for submit button',
    defaultMessage: 'Logga in'
  },
  forgotButton: {
    id: 'LoginEmail.forgotButton',
    description: 'Label for forgot button',
    defaultMessage: 'Glömt lösenord?'
  },
  loginFail: {
    id: 'LoginEmail.loginFail',
    description: 'Login fail message',
    defaultMessage: 'Felaktigt användarnamn och/eller lösenord'
  }
});

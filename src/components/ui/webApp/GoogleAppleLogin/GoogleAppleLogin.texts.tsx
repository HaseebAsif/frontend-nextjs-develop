import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  title: {
    id: 'title',
    description: 'Title',
    defaultMessage: 'Logga in'
  },
  lineLabel: {
    id: 'line.Label',
    description: 'Label for section line',
    defaultMessage: 'eller'
  },
  continueWithGoogle: {
    id: 'continue.WithGoogle',
    description: 'Google message',
    defaultMessage: 'För att fortsätta med Google måste du acceptera "Cookies".'
  },
  googleErrorMessage: {
    id: 'google.ErrorMessage',
    description: 'Error message',
    defaultMessage: 'Inloggning med Google avbröts'
  },
  appleErrorMessage: {
    id: 'apple.ErrorMessage',
    description: 'Error message',
    defaultMessage: 'Inloggning med Apple avbröts'
  }
});

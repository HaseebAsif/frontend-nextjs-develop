import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  successMessage: {
    id: 'UserInfoForm.successMessage',
    description: 'Success response in toast',
    defaultMessage: 'Ändringarna sparade'
  },
  errorMessage: {
    id: 'UserInfoForm.errorMessage',
    description: 'Error response in toast',
    defaultMessage: 'Ändringarna kunde inte sparas'
  }
});

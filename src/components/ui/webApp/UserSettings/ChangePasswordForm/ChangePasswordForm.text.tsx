import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  changePassword: {
    id: 'ChangePasswordForm.changePassword',
    description: 'Button to change password form',
    defaultMessage: 'Ändra'
  },
  password: {
    id: 'ChangePasswordForm.password',
    description: 'Password label',
    defaultMessage: 'Lösenord'
  },
  currentPassword: {
    id: 'ChangePasswordForm.currentPassword',
    description: 'Current password',
    defaultMessage: 'Nuvarande lösenord'
  },
  newPassword: {
    id: 'ChangePasswordForm.password',
    description: 'Placeholder for new password',
    defaultMessage: 'Nytt lösenord'
  },
  confirmPassword: {
    id: 'ChangePasswordForm.confirmPassword',
    description: 'Placeholder for confirming new password',
    defaultMessage: 'Bekräfta nytt lösenord'
  },
  passwordValidation: {
    id: 'ChangePasswordForm.passwordValidation',
    description: 'Message when password is too short',
    defaultMessage: 'Måste vara minst 8 tecken'
  },
  passwordMatch: {
    id: 'ChangePasswordForm.passwordMatch',
    description: 'Message when passwords do not match',
    defaultMessage: 'Lösenorden måste matcha'
  },
  passwordRequirtmentTitle: {
    id: 'ChangePasswordForm.passwordRequirtmentTitle',
    description: 'Title for password requirtment',
    defaultMessage: 'Ditt lösenord måste innehålla'
  },
  passwordRequirtment: {
    id: 'ChangePasswordForm.passwordRequirtment',
    description: 'Password requirtment ',
    defaultMessage: '• Minst 8 tecken'
  },
  saveButton: {
    id: 'ChangePasswordForm.saveButton',
    description: 'Label for save button',
    defaultMessage: 'Spara'
  },
  cancelButton: {
    id: 'ChangePasswordForm.cancelButton',
    description: 'Label for cancel button',
    defaultMessage: 'Avbryt'
  },
  successMessage: {
    id: 'UserInfoForm.successMessage',
    description: 'Success response in toast',
    defaultMessage: 'Ändring sparad'
  },
  errorMessage: {
    id: 'UserInfoForm.errorMessage',
    description: 'Error response in toast',
    defaultMessage: 'Ändringen kunde inte sparas'
  }
});

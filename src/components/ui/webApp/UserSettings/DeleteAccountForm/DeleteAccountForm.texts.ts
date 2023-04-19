import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  deleteInfo: {
    id: 'DeleteAccountForm.deleteInfo',
    description: 'Info about removing account',
    defaultMessage: 'Ta bort mitt konto från Booksquare'
  },
  deleteAccount: {
    id: 'DeleteAccountForm.deleteAccount',
    description: 'Delete account text',
    defaultMessage: 'Ta bort mitt konto'
  },
  confirmInfoPartOne: {
    id: 'DeleteAccountForm.confirmInfoPartOne',
    description: 'Confirm delete text part one',
    defaultMessage:
      'Denna ändring går inte att ångra. Är du säker på att du vill ta bort ditt konto? Återstående tid på abonnemanget går förlorat och återbetalas ej. Skriv '
  },
  confirmInfoPartTwo: {
    id: 'DeleteAccountForm.confirmInfoPartTwo',
    description: 'Confirm delete text part two',
    defaultMessage: ' i rutan nedan för att bekräfta.'
  },
  delete: {
    id: 'DeleteAccountForm.delete',
    description: 'Confirm delete text',
    defaultMessage: 'delete'
  },
  cancelButton: {
    id: 'DeleteAccountForm.cancelButton',
    description: 'Cancel delete button text',
    defaultMessage: 'Avbryt'
  },
  validationMessage: {
    id: 'DeleteAccountForm.validationMessage',
    description: 'Validation message on text field',
    defaultMessage: 'Se över stavningen för att ta bort ditt konto'
  },
  requiredMessage: {
    id: 'DeleteAccountForm.requiredMessage',
    description: 'Required message on text field',
    defaultMessage: 'Obligatorisk'
  },
  errorMessage: {
    id: 'DeleteAccountForm.errorMessage',
    description: 'Error message on delete user fail',
    defaultMessage: 'Kontot kunde inte tas bort'
  }
});

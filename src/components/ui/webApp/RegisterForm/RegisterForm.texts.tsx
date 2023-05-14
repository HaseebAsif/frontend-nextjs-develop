import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  registerTitle: {
    id: 'Register.title',
    description: 'Label/title for register',
    defaultMessage: 'Skapa konto'
  },
  emailLabel: {
    id: 'email.Label',
    description: 'Label for email input',
    defaultMessage: 'E-postadress'
  },
  createAccountTitle: {
    id: 'RegisterForm.createAccountTitle',
    description: '"Main title"',
    defaultMessage: 'Skapa konto'
  },
  nextButton: {
    id: 'RegisterForm.nextButton',
    description: 'Label for next button',
    defaultMessage: 'Nästa'
  },
  continueWithEmail: {
    id: 'RegisterForm.continueWithEmail',
    description: 'Continue with email adress',
    defaultMessage: 'Fortsätt med e-postadress'
  },
  termsLabel: {
    id: 'RegisterForm.termsLabel',
    description: 'Terms & condition input',
    defaultMessage:
      'Genom att klicka på "Fortsätt med Google/Apple" eller med "E-postadress" godkänner du '
  },
  termsLink: {
    id: 'RegisterForm.termsLink',
    description: 'Text for terms and conditions link',
    defaultMessage: 'Edsquares'
  },
  password: {
    id: 'RegisterForm.password',
    description: 'Password',
    defaultMessage: 'Lösenord'
  },
  email: {
    id: 'RegisterForm.email',
    description: 'Email',
    defaultMessage: 'E-postadress'
  },
  firstName: {
    id: 'RegisterForm.firstName',
    description: 'First name',
    defaultMessage: 'Förnamn'
  },
  lastName: {
    id: 'RegisterForm.lastName',
    description: 'Last name',
    defaultMessage: 'Efternamn'
  },
  choosePassword: {
    id: 'RegisterForm.choosePassword',
    description: 'Choose password',
    defaultMessage: 'Välj lösenord'
  },
  emailError: {
    id: 'RegisterForm.emailError',
    description: 'Text for emailerror',
    defaultMessage:
      'Det finns redan ett användarkonto kopplat till denna e-postadress'
  }
});

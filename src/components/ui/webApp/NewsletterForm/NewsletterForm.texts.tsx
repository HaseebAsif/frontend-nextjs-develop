import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  fieldPlaceholder: {
    id: 'NewsletterForm.emailLabel',
    description: 'Label for email field',
    defaultMessage: 'E-postadress'
  },
  newsletterMessage: {
    id: 'NewsletterForm.newsletterMessage',
    description: 'Information text for sign up for newsletter',
    defaultMessage: 'Du är nu uppskriven på vårt nyhetsbrev.'
  },
  subscribeButton: {
    id: 'NewsletterForm.subscribeButton',
    description: 'Subscribe button label',
    defaultMessage: 'Prenumerera'
  }
});

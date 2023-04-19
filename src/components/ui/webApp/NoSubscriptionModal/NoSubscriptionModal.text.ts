import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  message: {
    id: 'NoSubscriptionModal.message',
    description: 'Modal message',
    defaultMessage:
      'Du har ingen aktiv prenumeration, för att läsa boken kan du börja prenumerera här.'
  },
  subscribeButton: {
    id: 'NoSubscriptionModal.subscribeButton',
    description: 'Label for subscribe button',
    defaultMessage: 'Börja prenumerera'
  },
  closeButton: {
    id: 'NoSubscriptionModal.closeButton',
    description: 'Label for close button',
    defaultMessage: 'Stäng'
  }
});

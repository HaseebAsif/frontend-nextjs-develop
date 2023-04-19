import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  activeStatus: {
    id: 'SubscriptionBox.activeStatus',
    description: 'Label for active subscription',
    defaultMessage: 'Aktiv'
  },
  inactiveStatus: {
    id: 'SubscriptionBox.inactiveStatus',
    description: 'Label for inactive subscription',
    defaultMessage: 'Ej aktiv'
  },
  monthSubscription: {
    id: 'SubscriptionBox.monthSubscription',
    description: 'Label for monthly subscription',
    defaultMessage: 'kr/mån'
  },
  yearSubscription: {
    id: 'SubscriptionBox.yearSubscription',
    description: 'Label for yearly subscription',
    defaultMessage: 'kr/år'
  },
  handleSubscription: {
    id: 'SubscriptionBox.handleSubscription',
    description: 'Label on button to handle subscription',
    defaultMessage: 'Ändra'
  },
  renewSubscription: {
    id: 'SubscriptionBox.renewSubscription',
    description: 'Label on button to renew subscription',
    defaultMessage: 'Uppgradera'
  },
  endSubscription: {
    id: 'SubscriptionBox.endSubscription',
    description: 'Label on button to end subscription',
    defaultMessage: 'Avsluta'
  },
  subscriptionExpires: {
    id: 'SubscriptionBox.subscriptionExpires',
    description: 'Subscription expires label',
    defaultMessage: 'Avslutas: '
  },
  subscriptionRenew: {
    id: 'SubscriptionBox.subscriptionRenew',
    description: 'Subscription renew label',
    defaultMessage: 'Förnyas: '
  }
});

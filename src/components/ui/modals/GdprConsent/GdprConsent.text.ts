import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  heading: {
    id: 'GdprConsent.heading',
    description: 'GDPR consent heading',
    defaultMessage: 'Vi värdesätter din integritet'
  },
  paragraph: {
    id: 'GdprConsent.paragraph',
    description: 'GDPR consent paragraph',
    defaultMessage:
      'För att ge dig den bästa användarupplevelse av vår tjänst lagrar vi information. Genom att klicka "Tillåt alla" godkänner du att vi sparar data för dessa syften.'
  },
  policyLink: {
    id: 'GdprConsent.policyLink',
    description: 'GDPR consent policy link',
    defaultMessage: 'Läs mer i vår policy'
  },
  buttonAllow: {
    id: 'GdprConsent.buttonAllow',
    description: 'GDPR consent button allow',
    defaultMessage: 'Tillåt alla'
  },
  buttonDecline: {
    id: 'GdprConsent.buttonDecline',
    description: 'GDPR consent button decline',
    defaultMessage: 'Endast nödvändiga'
  }
});

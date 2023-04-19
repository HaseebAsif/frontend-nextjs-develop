import { defineMessages } from 'react-intl';

export const texts = defineMessages({
  title: {
    id: 'FAQ.title',
    description: 'Page title',
    defaultMessage: 'FAQ'
  },
  faqHeader: {
    id: 'FAQ.FaqHeader',
    description: 'Header for our Faq policy',
    defaultMessage: 'Vanliga frågor'
  },
  headlineContactUs: {
    id: 'FAQ.headlineContactUs',
    description: 'FAQ headline contact us',
    defaultMessage: 'Kontakta oss'
  },
  textContactUs: {
    id: 'FAQ.textContactUs',
    description: 'FAQ text not found question',
    defaultMessage:
      'Om du inte hittar svaret på just din fråga kan du ställa en fråga direkt till vår Kundservice.'
  },
  contactButton: {
    id: 'FAQ.contactButton',
    description: 'FAQ button link text',
    defaultMessage: 'Ställ en egen fråga'
  }
});

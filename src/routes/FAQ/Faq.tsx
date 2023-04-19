import React from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Button, Container } from 'components/ui/general';
import { FAQSection } from 'components/ui/webApp/FAQSection';
import { Paths } from 'consts/router';

import { texts } from './Faq.texts';

import styles from './Faq.module.scss';

export const Faq = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.root}>
        <h6 className={styles.faqHeader}>
          {intl.formatMessage(texts.faqHeader)}
        </h6>
        <FAQSection />
        <div className={styles.contact}>
          <h5 className={styles.headlineContact}>
            {intl.formatMessage(texts.headlineContactUs)}
          </h5>
          <p>{intl.formatMessage(texts.textContactUs)}</p>
          <Button href={Paths.CONTACT_US} rounded={false}>
            {intl.formatMessage(texts.contactButton)}
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Faq;

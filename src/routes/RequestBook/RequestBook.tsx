import React from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import { RequestBookForm } from 'components/ui/webApp/RequestBookForm';

import { texts } from './RequestBook.texts';

import styles from './RequestBook.module.scss';

export const RequestBook = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)} />
      <div className={styles.backgroundContainer}>
        <div className={styles.background} />
      </div>

      <Container className={styles.root}>
        <RequestBookForm />
      </Container>
    </>
  );
};

import React from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';

import { texts } from './Cookies.texts';

import styles from './Cookies.module.scss';

export const Cookies = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.root}>
        <div className={styles.header}>
          <h5>{intl.formatMessage(texts.cookiesHeader)}</h5>
        </div>
        <div>
          <p>{intl.formatMessage(texts.cookiesParagraph1)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader2)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph2)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader3)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph3)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader4)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph4)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader5)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph5)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader6)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph6)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader7)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph7)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader8)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph8)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader9)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph9)}</p>
        </div>
        <div>
          <h6>{intl.formatMessage(texts.cookiesSubHeader10)}</h6>
          <p>{intl.formatMessage(texts.cookiesParagraph10)}</p>
        </div>
      </Container>
    </>
  );
};

import React from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container, Grid, Gutter } from 'components/ui/general';
import { ContactForm } from 'components/ui/webApp/ContactForm';

import { texts } from './ContactUs.texts';

import styles from './ContactUs.module.scss';

export const ContactUs = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)}>
        <meta
          name="description"
          content={intl.formatMessage(texts.metaDescriptionContent)}
        />
      </SEO>
      <div className={styles.backgroundContainer}>
        <div className={styles.background} />
      </div>

      <Container className={styles.root}>
        <Grid gutter={{ bottom: 7, left: 5 }}>
          <Grid.Item width={{ root: 12, lg: 6 }}>
            <Gutter gutter={{ bottom: 4 }}>
              <Gutter.Item>
                <h1>{intl.formatMessage(texts.title)}</h1>
              </Gutter.Item>
              <Gutter.Item>
                <h2>{intl.formatMessage(texts.contactUsSubHeader1)}</h2>
                <p>{intl.formatMessage(texts.contactUsParagraph1)}</p>
              </Gutter.Item>
              <Gutter.Item>
                <h2>{intl.formatMessage(texts.contactUsSubHeader2)}</h2>
                <p>{intl.formatMessage(texts.contactUsParagraph2)}</p>
              </Gutter.Item>
            </Gutter>
          </Grid.Item>
          <Grid.Item width={{ root: 12, lg: 6 }}>
            <ContactForm />
          </Grid.Item>
        </Grid>
      </Container>
    </>
  );
};

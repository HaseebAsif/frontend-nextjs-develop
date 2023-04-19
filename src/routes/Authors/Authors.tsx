import React from 'react';

import { useIntl } from 'react-intl';

import { Container, Grid } from 'components/ui/general';

import { texts } from './Authors.texts';

import styles from './Authors.module.scss';

export const Authors = () => {
  const intl = useIntl();

  return (
    <Container className={styles.root} fullWidth>
      <h1>{intl.formatMessage(texts.authorsHeader)}</h1>
      <p>{intl.formatMessage(texts.authorsParagraph1)}</p>
      <p>{intl.formatMessage(texts.authorsParagraph2, { br: <br /> })}</p>
      <p>{intl.formatMessage(texts.authorsParagraph3, { br: <br /> })}</p>
      <Grid.Item width={{ root: 12, lg: 12 }}>
        <div style={{ marginTop: '60px' }}>
          <img
            style={{ width: '100%', borderRadius: '16px' }}
            src="./fortfattare.jpg"
            alt=""
          />
        </div>
      </Grid.Item>
    </Container>
  );
};

import React, { useEffect } from 'react';

import { FormattedMessage } from 'react-intl';

import { NotFoundIcon } from 'assets/icons';
import { Button, Container } from 'components/ui/general';
import { Paths } from 'consts/router';

import { texts } from './Error.text';

import styles from './Error.module.scss';

interface ErrorProps {
  statusCode?: number;
}

export const Error = ({ statusCode }: ErrorProps) => {
  useEffect(() => {
    console.log('statusCode', statusCode);
  }, [statusCode]);

  return (
    <Container className={styles.root}>
      <div className={styles.iconHolder}>
        <NotFoundIcon />
      </div>
      <h1 className={styles.heading}>
        <FormattedMessage {...texts.heading} />
      </h1>
      <Button href={Paths.HOME} className={styles.button}>
        <FormattedMessage {...texts.button} />
      </Button>
    </Container>
  );
};

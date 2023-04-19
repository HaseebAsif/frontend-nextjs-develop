import React from 'react';

import { Spinner } from 'components/ui/general';

import styles from './Loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.root}>
      <Spinner visible size="lg" />
    </div>
  );
};

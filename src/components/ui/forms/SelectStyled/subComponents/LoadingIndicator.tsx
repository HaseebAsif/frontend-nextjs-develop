import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const LoadingIndicator = (props: any) => {
  return (
    <div className={styles.loadingIndicator}>
      <components.LoadingIndicator {...props} />
    </div>
  );
};

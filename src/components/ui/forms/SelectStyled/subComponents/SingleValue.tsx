import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const SingleValue = (props: any) => (
  <div className={styles.singleValue}>
    <components.SingleValue {...props} />
  </div>
);

import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const MultiValue = (props: any) => {
  return (
    <div className={styles.multiValue}>
      <components.MultiValue {...props} />
    </div>
  );
};

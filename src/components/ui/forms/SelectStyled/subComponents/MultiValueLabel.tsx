import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const MultiValueLabel = (props: any) => {
  return (
    <div className={styles.multiValueLabel}>
      <components.MultiValueLabel {...props} />
    </div>
  );
};

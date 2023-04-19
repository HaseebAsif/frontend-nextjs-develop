import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const NoOptionsMessage = (props: any) => {
  return (
    <div className={styles.noOptionsMessage}>
      <components.NoOptionsMessage {...props} />
    </div>
  );
};

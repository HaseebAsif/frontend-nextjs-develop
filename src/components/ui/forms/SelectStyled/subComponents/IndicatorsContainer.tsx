import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const IndicatorsContainer = (props: any) => {
  return (
    <components.IndicatorsContainer
      className={styles.indicatorsContainer}
      {...props}
    />
  );
};

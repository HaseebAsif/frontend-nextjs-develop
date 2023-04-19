import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const Group = (props: any) => (
  <div className={styles.group}>
    <components.Group {...props} />
  </div>
);

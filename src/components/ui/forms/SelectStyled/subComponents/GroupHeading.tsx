import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const GroupHeading = (props: any) => (
  <div className={styles.groupHeading}>
    <div>{`Group: `.toString()}</div>
    <components.GroupHeading {...props} />
  </div>
);

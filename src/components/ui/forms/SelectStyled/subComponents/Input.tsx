import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const Input = ({ selectProps: { name }, ...rest }: any) => {
  return <components.Input className={styles.input} name={name} {...rest} />;
};

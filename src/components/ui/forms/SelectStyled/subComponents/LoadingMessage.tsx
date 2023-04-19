import React from 'react';

import { components } from 'react-select';

import { Spinner } from 'components/ui/general';

import styles from '../SelectStyled.module.scss';

export const LoadingMessage = (props: any) => {
  return (
    <components.LoadingMessage className={styles.loadingMessage} {...props}>
      <Spinner visible color="light" />
    </components.LoadingMessage>
  );
};

import React, { FC, ReactNode } from 'react';

import styles from './NoBooksBox.module.scss';

interface NoBooksBoxProps {
  headline: string;
  children: ReactNode;
}

export const NoBooksBox: FC<NoBooksBoxProps> = ({ headline, children }) => {
  return (
    <div className={styles.root}>
      <h6>{headline}</h6>
      {children}
    </div>
  );
};

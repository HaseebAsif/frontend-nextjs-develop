import React, { ReactNode } from 'react';

import classNames from 'classnames';

import { Icon } from 'components/ui/general';

import styles from './Information.module.scss';

export interface InformationProps {
  children: ReactNode;
  status?: 'info' | 'success' | 'error' | 'warning';
  icon?: boolean;
  className?: string;
}

export const Information = ({
  children,
  status = 'info',
  icon = true,
  className
}: InformationProps) => {
  if (children) {
    return (
      <div
        className={classNames(styles.root, className, {
          [styles[`${status}Status`]]: status
        })}
      >
        {icon && <Icon name="spotify" className={styles.icon} />}
        <div>{children}</div>
      </div>
    );
  }

  return null;
};

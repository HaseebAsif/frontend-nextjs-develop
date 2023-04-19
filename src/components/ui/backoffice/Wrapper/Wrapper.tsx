import React, { FC, ReactNode, useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import { Menu } from 'components/ui/backoffice/Menu';
import { BackofficePaths } from 'consts/router';

import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  const { pathname } = useRouter();

  const backofficeRoutes = useMemo(() => {
    return Object.values(BackofficePaths).map((path) => {
      if (typeof path === 'function') return path();
      return path;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (!isBackoffice) {
        (window as any)?.Intercom('update', { hide_default_launcher: false });
      }
    };
  });

  const isBackoffice =
    backofficeRoutes.includes(pathname) &&
    !pathname.includes(BackofficePaths.BACKOFFICE_LOGIN);

  (window as any)?.Intercom('update', { hide_default_launcher: true });

  return (
    <div className={styles.root}>
      {isBackoffice && <Menu />}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

import React, { useCallback } from 'react';

import { Link } from 'components/tools';
import { Icon } from 'components/ui/general/index';

import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbsProps {
  crumbs: {
    label?: string;
    to?: string;
  }[];
}

export const Breadcrumbs = ({ crumbs }: BreadcrumbsProps) => {
  const renderCrumbs = useCallback(() => {
    return crumbs.map(({ label = '...', to }, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={label + index} className={styles.crumb}>
        {index === crumbs.length - 1 || !to ? (
          <div className={styles.current}>{label}</div>
        ) : (
          <>
            <Link href={to} className={styles.link}>
              {label}
            </Link>
            <Icon className={styles.icon} name="angle-right" />
          </>
        )}
      </div>
    ));
  }, [crumbs]);

  if (crumbs?.length) {
    return <div className="grid grid--middle">{renderCrumbs()}</div>;
  }

  return null;
};

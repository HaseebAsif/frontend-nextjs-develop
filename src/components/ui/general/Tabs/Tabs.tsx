import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';

import { TabsSelectors } from 'consts/cypress';

import styles from './Tabs.module.scss';

export interface TabsProps {
  panes: {
    id: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
  }[];
  activePaneId?: string;
  grid?: boolean;
  noStyleOnHover?: boolean;
  className?: string;
}

export const Tabs = ({
  panes,
  activePaneId,
  grid,
  noStyleOnHover,
  className
}: TabsProps) => {
  const [selectedPaneId, setSelectedPaneId] = useState(
    activePaneId || panes[0].id
  );

  useEffect(() => {
    if (activePaneId) {
      setSelectedPaneId(activePaneId);
    }
  }, [activePaneId]);

  const renderNavigation = useCallback(() => {
    return panes.map(({ id, label, disabled }) => (
      <button
        key={id}
        type="button"
        onClick={() => setSelectedPaneId(id)}
        className={classNames(
          styles.button,
          { [styles.nonHover]: noStyleOnHover },
          {
            [styles.active]: selectedPaneId === id
          }
        )}
        disabled={disabled}
        data-cy={TabsSelectors.Label}
      >
        {label}
      </button>
    ));
  }, [selectedPaneId, panes, noStyleOnHover]);

  const renderContent = useCallback(() => {
    return panes.map(({ id, content }) => {
      if (selectedPaneId === id) {
        return (
          <div key={id} data-cy={TabsSelectors.Content}>
            {content}
          </div>
        );
      }

      return null;
    });
  }, [selectedPaneId, panes]);

  return (
    <div className={className} data-cy={TabsSelectors.Root}>
      <nav className={styles.navigation}>
        <div
          className={classNames(styles.navigationInner, {
            [styles.grid]: grid
          })}
        >
          {renderNavigation()}
        </div>
      </nav>
      {renderContent()}
    </div>
  );
};

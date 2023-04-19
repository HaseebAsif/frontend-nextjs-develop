import React, { useCallback, useContext, ReactNode, useMemo } from 'react';

import classNames from 'classnames';
import { remove } from 'lodash';

import { Icon, IconProps } from 'components/ui/general';

import { AccordionContext } from '../../../../../context/accordion';

import styles from '../Accordion.module.scss';

interface AccordionLabelProps {
  children: ReactNode;
  iconClosed?: IconProps['name'];
  iconOpened?: IconProps['name'];
  className?: string;
}

export const AccordionLabel = ({
  children,
  iconClosed,
  iconOpened,
  className,
  ...props
}: AccordionLabelProps) => {
  const [activeItems, setActiveItems] = useContext(AccordionContext);
  const { id, multiple, isActive, disabled } = props as {
    id: string;
    multiple?: boolean;
    isActive: boolean;
    disabled?: boolean;
  };

  const updateActiveItems = useCallback(() => {
    if (multiple) {
      const collectActiveItems = isActive
        ? remove(activeItems, (activeId) => activeId !== id)
        : [...activeItems, id];
      setActiveItems(collectActiveItems);
      return;
    }

    setActiveItems(isActive ? [] : [id]);
  }, [isActive, multiple, activeItems, id, setActiveItems]);

  const iconName = useMemo(() => {
    return isActive
      ? iconOpened || 'chevron-down'
      : iconClosed || 'chevron-down';
  }, [isActive, iconOpened, iconClosed]);

  return (
    <button
      type="button"
      className={classNames(styles.label, className, {
        [styles.isActive]: isActive
      })}
      onClick={updateActiveItems}
      disabled={disabled}
    >
      <div className={styles.labelHolder}>{children}</div>
      <div className={styles.iconHolder}>
        <Icon name={iconName} className={styles.icon} />
      </div>
    </button>
  );
};

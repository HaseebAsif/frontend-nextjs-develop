import React, { useContext, ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { passPropsToChildren } from 'utils';

import { AccordionContext } from '../../../../../context/accordion';

import styles from '../Accordion.module.scss';

interface AccordionItemProps {
  children: ReactNode;
  id: string;
  className?: string;
  activeClassName?: string;
  disabled?: boolean;
}

export const AccordionItem = ({
  children,
  className,
  activeClassName,
  id,
  ...props
}: AccordionItemProps) => {
  const [activeItems] = useContext(AccordionContext);
  const isActive = useMemo(() => activeItems.includes(id), [activeItems, id]);

  return (
    <div
      className={classNames(
        styles.item,
        className,
        {
          [styles.isActive]: isActive
        },
        {
          [activeClassName ?? '']: isActive && activeClassName
        }
      )}
    >
      {passPropsToChildren(children, { ...props, id, isActive })}
    </div>
  );
};

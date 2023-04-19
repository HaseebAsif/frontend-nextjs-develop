import React, { ReactNode, useMemo } from 'react';

import classNames from 'classnames';

export interface GutterItemProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

export const GutterItem = ({
  children,
  className,
  as,
  ...rest
}: GutterItemProps) => {
  const Element = useMemo(() => as || 'div', [as]);

  return (
    <Element {...rest} className={classNames('gutter__item', className)}>
      {children}
    </Element>
  );
};

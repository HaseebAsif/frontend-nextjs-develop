import React, { ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { GridProps } from 'components/ui/general';
import { FractionsCollection } from 'types/framework';

export interface GridItemProps {
  children: ReactNode;
  align?: 'top' | 'middle' | 'bottom';
  fixed?: boolean;
  fill?: boolean;
  first?: boolean;
  last?: boolean;
  className?: string;
  width?: FractionsCollection;
  offset?: FractionsCollection;
  gutter?: GridProps['gutter'];
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

export const GridItem = ({
  children,
  align,
  fixed,
  fill,
  first,
  last,
  className,
  width,
  offset,
  gutter,
  as,
  ...rest
}: GridItemProps) => {
  const Element = useMemo(() => as || 'div', [as]);

  const getWidthFractions = useMemo(() => {
    if (typeof width === 'number') {
      return `grid__width-${width}/12`;
    }

    if (typeof width === 'object') {
      let collectClassNames = '';

      Object.keys(width).forEach((breakpoint) => {
        collectClassNames += ` grid__width-${(width as any)[breakpoint]}/12${
          breakpoint === 'root' ? '' : `@${breakpoint}`
        }`;
      });

      return collectClassNames;
    }

    return '';
  }, [width]);

  const getOffsetFractions = useMemo(() => {
    if (typeof offset === 'number') {
      return `grid__offset-${offset}/12`;
    }

    if (typeof offset === 'object') {
      let collectClassNames = '';

      Object.keys(offset).forEach((breakpoint) => {
        collectClassNames += ` grid__offset-${(offset as any)[breakpoint]}/12${
          breakpoint === 'root' ? '' : `@${breakpoint}`
        }`;
      });

      return collectClassNames;
    }

    return '';
  }, [offset]);

  return (
    <Element
      {...rest}
      className={classNames(className, {
        [getWidthFractions]: !!getWidthFractions,
        [getOffsetFractions]: !!getOffsetFractions,
        [`grid__${align}`]: !!align,
        grid__fixed: fixed,
        grid__fill: fill,
        grid__first: first,
        grid__last: last,
        gutter__item: !!gutter
      })}
    >
      {children}
    </Element>
  );
};

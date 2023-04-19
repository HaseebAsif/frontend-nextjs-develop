import React, { ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { GutterCollection } from 'types/framework';

import { GutterItem } from './subComponents';

export interface GutterProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  gutter: {
    left?: GutterCollection;
    bottom?: GutterCollection;
  };
  [key: string]: any;
}

export const Gutter = ({
  children,
  className,
  as,
  gutter,
  ...rest
}: GutterProps) => {
  const Element = useMemo(() => as || 'div', [as]);

  const getGutters = useMemo(() => {
    let collectClassNames = '';

    Object.keys(gutter).forEach((side) => {
      const numberOrObject = (gutter as any)[side];

      if (typeof numberOrObject === 'number') {
        collectClassNames += ` gutter-${side}-${numberOrObject}`;
      }

      if (typeof numberOrObject === 'object') {
        Object.keys(numberOrObject).forEach((breakpoint) => {
          collectClassNames += ` gutter-${side}-${numberOrObject[breakpoint]}${
            breakpoint === 'root' ? '' : `@${breakpoint}`
          }`;
        });
      }
    });

    return collectClassNames;
  }, [gutter]);

  return (
    <Element
      {...rest}
      className={classNames(className, {
        [getGutters]: !!getGutters
      })}
    >
      {children}
    </Element>
  );
};

Gutter.Item = GutterItem;

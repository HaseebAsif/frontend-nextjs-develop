import React, { ReactNode, useMemo } from 'react';

import classNames from 'classnames';

import { GutterProps } from 'components/ui/general';
import { Align } from 'types/framework';
import { passPropsToChildren } from 'utils';

import { GridItem } from './subComponents';

export interface GridProps {
  children: ReactNode;
  reverse?: boolean;
  space?: 'between' | 'around';
  align?: Align | Align[];
  fill?: boolean;
  className?: string;
  gutter?: GutterProps['gutter'];
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

export const Grid = ({
  children,
  reverse,
  space,
  align,
  fill,
  className,
  as,
  gutter,
  ...rest
}: GridProps) => {
  const Element = useMemo(() => as || 'div', [as]);

  const getAlign = useMemo(() => {
    if (typeof align === 'string') {
      return `grid--${align}`;
    }

    if (Array.isArray(align)) {
      let collectClassNames = '';

      align.forEach((item) => {
        collectClassNames += ` grid--${item}`;
      });

      return collectClassNames;
    }

    return '';
  }, [align]);

  const getGutters = useMemo(() => {
    if (gutter) {
      let collectClassNames = '';

      Object.keys(gutter).forEach((side) => {
        const numberOrObject = (gutter as any)[side];

        if (typeof numberOrObject === 'number') {
          collectClassNames += ` gutter-${side}-${numberOrObject}`;
        }

        if (typeof numberOrObject === 'object') {
          Object.keys(numberOrObject).forEach((breakpoint) => {
            collectClassNames += ` gutter-${side}-${
              numberOrObject[breakpoint]
            }${breakpoint === 'root' ? '' : `@${breakpoint}`}`;
          });
        }
      });

      return collectClassNames;
    }

    return '';
  }, [gutter]);

  return (
    <Element
      {...rest}
      className={classNames('grid', className, {
        'grid--reverse': reverse,
        [`grid--${space}`]: !!space,
        [getAlign]: !!getAlign,
        'grid--fill': fill,
        [getGutters]: !!getGutters
      })}
    >
      {passPropsToChildren(children, { gutter })}
    </Element>
  );
};

Grid.Item = GridItem;

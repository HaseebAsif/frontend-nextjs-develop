import React, { FC, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { Fonts, Names } from 'types/icon';

import styles from './Icon.module.scss';

export interface IconProps {
  font?: Fonts;
  name: Names;
  className?: string;
}

const Icon: FC<IconProps> = ({ font = 'madrid', name, className }) => {
  const ref = useRef<HTMLElement>(null);
  const [isDuotone, setIsDuotone] = useState(false);

  useEffect(() => {
    const { current } = ref;

    if (current !== null) {
      const fontWeight = window
        .getComputedStyle(current)
        .getPropertyValue('font-weight');

      setIsDuotone(fontWeight === '800');
    }
  }, [ref, font]);

  return (
    <i
      ref={ref}
      className={classNames(styles.root, className, {
        [styles[`name-${name}`]]: name,
        [styles[font]]: font,
        [styles.duotone]: isDuotone
      })}
    />
  );
};

export default Icon;

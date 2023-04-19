import React, { ReactNode, useCallback, useMemo } from 'react';

import classNames from 'classnames';

import { Link, LinkProps } from 'components/tools';
import { Icon, IconProps, Spinner } from 'components/ui/general';
import { Fonts } from 'types/icon';

import styles from './Button.module.scss';

export interface ButtonProps {
  children?: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  href?: LinkProps['href'];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  onClick?: (event: Event) => void;
  ghost?: boolean;
  color?: 'secondary' | 'alpha93' | 'error' | 'primary' | 'success'; // color names from $all-colors
  target?: string;
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
  loading?: boolean;
  iconRight?: IconProps;
  iconLeft?: IconProps;
  rounded?: boolean;
  naked?: boolean;
  stripPadding?: boolean;
}

export const Button = ({
  children,
  type,
  href,
  size = 'lg',
  className,
  disabled,
  onClick,
  ghost,
  color = 'secondary',
  target,
  as,
  fullWidth,
  loading,
  iconRight,
  iconLeft,
  rounded = true,
  naked,
  stripPadding
}: ButtonProps) => {
  const ElementType = useMemo<any>(() => {
    if (href) return Link;
    return as || 'button';
  }, [as, href]);

  const getType = useMemo(() => {
    if (type) {
      return type;
    }

    if (ElementType === 'button') {
      return 'button';
    }
  }, [ElementType, type]);

  const getIconFont = useCallback(({ font }: { font?: Fonts }) => {
    if (font) {
      return font;
    }
    return 'stockholm';
  }, []);

  return (
    <ElementType
      type={getType}
      className={classNames(styles.root, className, {
        [styles.disabled]: disabled,
        [styles.ghost]: ghost,
        [styles[`${color}Color`]]: color,
        [styles[`${size}Size`]]: size,
        [styles.fullWidth]: fullWidth,
        [styles.loading]: loading,
        [styles.rounded]: rounded,
        [styles.hasChildren]: !!children,
        [styles.naked]: naked,
        [styles.stripPadding]: stripPadding
      })}
      href={href}
      disabled={disabled}
      onClick={onClick && !disabled ? onClick : null}
      target={target && href ? target : null}
    >
      <span className={styles.content}>
        {!!iconLeft && (
          <div className={styles.iconLeft}>
            <Icon name={iconLeft.name} font={getIconFont(iconLeft)} />
          </div>
        )}
        {!!children && children}
        {!!iconRight && (
          <div className={styles.iconRight}>
            <Icon name={iconRight.name} font={getIconFont(iconRight)} />
          </div>
        )}
      </span>
      <div className={styles.spinner}>
        <Spinner
          visible={!!loading}
          size="sm"
          color={naked ? 'dark' : 'light'}
        />
      </div>
    </ElementType>
  );
};

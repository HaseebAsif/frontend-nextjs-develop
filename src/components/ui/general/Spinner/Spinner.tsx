import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './Spinner.module.scss';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  classNameSpinner?: string;
  classNameText?: string;
  color?: 'dark' | 'light'; // color names from $base-colors and $common-colors
  visible: boolean;
  text?: ReactNode;
  textAlign?: 'top' | 'right' | 'bottom' | 'left';
}

export const Spinner = ({
  size = 'md',
  className,
  classNameSpinner,
  classNameText,
  color = 'dark',
  visible,
  text,
  textAlign = 'bottom'
}: SpinnerProps) => {
  if (visible) {
    return (
      <div
        className={classNames(styles.root, className, {
          [styles[`${color}Color`]]: color,
          [styles[`${size}Size`]]: size,
          [styles[`${textAlign}TextAlign`]]: text && textAlign
        })}
      >
        <div className={classNames(styles.spinner, classNameSpinner)} />
        {!!text && (
          <div className={classNames(styles.text, classNameText)}>{text}</div>
        )}
      </div>
    );
  }

  return null;
};

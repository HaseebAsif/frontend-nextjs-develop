import React, { ChangeEvent, useMemo } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';
import { Icon } from 'components/ui/general';

import styles from './SelectNative.module.scss';

export interface SelectNativeProps {
  name: string;
  ariaLabel?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'light' | 'transparent'; // color names from $all-colors
  disabled?: boolean;
  register: UseFormMethods['register'];
  validation?: RegisterOptions;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string | number;
    label: string | number;
    disabled?: boolean;
  }[];
  fullWidth?: boolean;
  error?: UseFormMethods['errors'];
  rounded?: boolean;
  defaultValue?: string;
}

const SelectNative = ({
  register,
  ariaLabel,
  label,
  size = 'md',
  color = 'light',
  className,
  validation,
  onChange,
  onBlur,
  disabled,
  name,
  options,
  fullWidth,
  error,
  rounded,
  defaultValue
}: SelectNativeProps) => {
  const Root = useMemo(() => (label ? 'label' : 'div'), [label]);

  return (
    <>
      <Root
        className={classNames(styles.root, className, {
          [styles.disabled]: disabled,
          [styles[`${color}Color`]]: color,
          [styles[`${size}Size`]]: size,
          [styles.fullWidth]: fullWidth,
          [styles.rounded]: rounded
        })}
      >
        {!!label && <div className={styles.label}>{label}</div>}
        <div className={styles.selectHolder}>
          <select
            name={name}
            ref={register({ ...validation })}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            aria-label={ariaLabel || label}
            className={styles.select}
            defaultValue={defaultValue}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.arrow}>
            <Icon name="angle-down" />
          </div>
        </div>
      </Root>
      <Error error={error} />
    </>
  );
};

export default SelectNative;

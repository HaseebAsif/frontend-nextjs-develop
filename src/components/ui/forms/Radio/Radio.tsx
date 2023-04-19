import React, { ChangeEvent } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';

import styles from './Radio.module.scss';

export interface RadioProps {
  name: string;
  value: string;
  label: string;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  register: UseFormMethods['register'];
  validation?: RegisterOptions;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: UseFormMethods['errors'];
  defaultChecked?: boolean;
}

const Radio = ({
  name,
  value,
  ariaLabel,
  className,
  disabled,
  register,
  validation = {},
  onChange,
  onBlur,
  label,
  error,
  defaultChecked
}: RadioProps) => {
  return (
    <>
      <label
        className={classNames(styles.root, className, {
          [styles.disabled]: disabled
        })}
      >
        <input
          type="radio"
          disabled={disabled}
          name={name}
          value={value}
          ref={register({ ...validation })}
          onChange={onChange}
          onBlur={onBlur}
          aria-label={ariaLabel || label}
          className={styles.input}
          defaultChecked={defaultChecked}
        />
        <div className={styles.radioHolder}>
          <div className={styles.radio} />
        </div>
        <div className={styles.text}>{label}</div>
      </label>
      <Error error={error} />
    </>
  );
};

export default Radio;

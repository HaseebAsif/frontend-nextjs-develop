import React, { ChangeEvent } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';
import SwitchControlled from 'components/ui/forms/Switch/SwitchControlled';

import styles from './Switch.module.scss';

export interface SwitchProps {
  name: string;
  labelRight?: string;
  labelLeft?: string;
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

const Switch = ({
  name,
  ariaLabel,
  className,
  disabled,
  register,
  validation = {},
  onChange,
  onBlur,
  labelRight,
  labelLeft,
  error,
  defaultChecked
}: SwitchProps) => {
  return (
    <>
      <label
        className={classNames(styles.root, className, {
          [styles.disabled]: disabled
        })}
      >
        <input
          type="checkbox"
          disabled={disabled}
          name={name}
          ref={register({ ...validation })}
          onChange={onChange}
          onBlur={onBlur}
          aria-label={ariaLabel || labelRight || labelLeft}
          className={styles.input}
          defaultChecked={defaultChecked}
        />
        {!!labelLeft && <div className={styles.labelLeft}>{labelLeft}</div>}
        <div className={styles.switchHolder}>
          <div className={styles.switch} />
        </div>
        {!!labelRight && <div className={styles.labelRight}>{labelRight}</div>}
      </label>
      <Error error={error} />
    </>
  );
};

Switch.Controlled = SwitchControlled;

export default Switch;

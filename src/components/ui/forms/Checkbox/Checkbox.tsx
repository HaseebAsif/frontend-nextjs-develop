import React, { ChangeEvent } from 'react';

import classNames from 'classnames';
import { RegisterOptions, UseFormMethods } from 'react-hook-form';

import { Error } from 'components/ui/forms';
import { Icon } from 'components/ui/general';

import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  name: string;
  label?: string;
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

const Checkbox = ({
  name,
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
}: CheckboxProps) => {
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
          aria-label={ariaLabel || label}
          className={styles.input}
          defaultChecked={defaultChecked}
        />
        <div className={styles.checkboxHolder}>
          <div className={styles.checkbox}>
            <Icon name="check" font="honolulu" />
          </div>
        </div>
        {!!label && <div className={styles.text}>{label}</div>}
      </label>
      <Error error={error} />
    </>
  );
};

export default Checkbox;

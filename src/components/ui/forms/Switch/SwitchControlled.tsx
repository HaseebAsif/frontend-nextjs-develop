import React from 'react';

import classNames from 'classnames';

import { SwitchProps } from 'components/ui/forms';

import styles from './Switch.module.scss';

export interface SwitchControlledProps {
  labelRight?: SwitchProps['labelRight'];
  labelLeft?: SwitchProps['labelLeft'];
  ariaLabel?: SwitchProps['ariaLabel'];
  className?: SwitchProps['className'];
  disabled?: SwitchProps['disabled'];
  onChange?: SwitchProps['onChange'];
  onBlur?: SwitchProps['onBlur'];
  checked: boolean;
}

const SwitchControlled = ({
  ariaLabel,
  className,
  disabled,
  onChange,
  onBlur,
  labelRight,
  labelLeft,
  checked = false
}: SwitchControlledProps) => {
  return (
    <label
      className={classNames(styles.root, className, {
        [styles.disabled]: disabled
      })}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        aria-label={ariaLabel || labelRight || labelLeft}
        className={styles.input}
        readOnly={!onChange}
      />
      {!!labelLeft && <div className={styles.labelLeft}>{labelLeft}</div>}
      <div className={styles.switchHolder}>
        <div className={styles.switch} />
      </div>
      {!!labelRight && <div className={styles.labelRight}>{labelRight}</div>}
    </label>
  );
};

export default SwitchControlled;

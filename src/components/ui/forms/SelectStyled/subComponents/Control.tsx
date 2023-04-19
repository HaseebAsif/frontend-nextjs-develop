import React, { useMemo } from 'react';

import classNames from 'classnames';
import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const Control = ({
  selectProps: { label, isDisabled },
  ...rest
}: any) => {
  const Root = useMemo(() => (label ? 'label' : 'div'), [label]);

  return (
    <Root className={styles.control}>
      {label && <div className={styles.label}>{label}</div>}
      <components.Control
        className={classNames(styles.inner, { [styles.disabled]: isDisabled })}
        {...rest}
      />
    </Root>
  );
};

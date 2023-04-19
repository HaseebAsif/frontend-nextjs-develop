import React from 'react';

import classNames from 'classnames';
import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const Option = ({ isSelected, isFocused, ...rest }: any) => {
  return (
    <div className={classNames(styles.option)}>
      <components.Option
        className={classNames({
          [styles.isSelected]: isSelected,
          [styles.isFocused]: isFocused
        })}
        {...rest}
      />
    </div>
  );
};

import React from 'react';

import { components } from 'react-select';

import { Icon } from 'components/ui/general';

import styles from '../SelectStyled.module.scss';

export const MultiValueRemove = ({
  selectProps: { iconMultiValueRemove },
  ...props
}: any) => {
  if (iconMultiValueRemove)
    return (
      <div className={styles.multiValueRemove}>
        <components.MultiValueRemove {...props}>
          <Icon name={iconMultiValueRemove} />
        </components.MultiValueRemove>
      </div>
    );

  return (
    <div className={styles.multiValueRemove}>
      <components.MultiValueRemove {...props} />
    </div>
  );
};

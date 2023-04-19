import React from 'react';

import { components } from 'react-select';

import styles from '../SelectStyled.module.scss';

export const MenuList = (props: any) => {
  return (
    <div className={styles.menuList}>
      <components.MenuList {...props}>
        <div className={styles.menuListHeading}>
          {`Custom Menu List`.toString()}
        </div>
        {props.children}
      </components.MenuList>
    </div>
  );
};

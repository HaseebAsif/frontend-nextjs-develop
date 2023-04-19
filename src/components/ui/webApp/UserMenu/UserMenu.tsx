import React from 'react';

import { Accordion } from 'components/ui/general';
import UserMenuItems from 'components/ui/webApp/UserMenuItems';
import { UserMenuSelectors } from 'consts/cypress';
import { useUser } from 'hooks';

import styles from './UserMenu.module.scss';

export const UserMenu = () => {
  const { user } = useUser();
  const name = user?.firstName || 'Konto';

  return (
    <div data-cy={UserMenuSelectors.USER_ACCORDION}>
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Label className={styles.accordionLabel}>
            {name}
          </Accordion.Label>
          <Accordion.Content className={styles.menuWrapper}>
            <div className={styles.menu}>
              <UserMenuItems />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

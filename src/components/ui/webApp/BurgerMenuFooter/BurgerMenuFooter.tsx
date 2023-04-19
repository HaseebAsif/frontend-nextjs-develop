import React from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import { Paths } from 'consts/router';

import { texts } from './BurgerMenuFooter.texts';

import styles from './BurgerMenuFooter.module.scss';

export const ExploreMenuFooter = () => {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div className={styles.stickyFooter}>
      <Button
        className={styles.loginButton}
        rounded={false}
        type="button"
        size="md"
        color="secondary"
        naked
        onClick={() => router.push(Paths.LOGIN())}
      >
        {intl.formatMessage(texts.login)}
      </Button>
      <Button
        rounded={false}
        type="button"
        size="md"
        onClick={() => router.push(Paths.REGISTER())}
      >
        {intl.formatMessage(texts.freeTrial)}
      </Button>
    </div>
  );
};

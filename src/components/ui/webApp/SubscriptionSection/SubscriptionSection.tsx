import React from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import SubscriptionBox from 'components/ui/webApp/SubscriptionBox/SubscriptionBox';
import { SubscriptionSectionSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useUser } from 'hooks';
import { StripeSubscription } from 'types/graphql';

import { texts } from './SubscriptionSection.texts';

import styles from './SubscriptionSection.module.scss';

const SubscriptionSection = () => {
  const intl = useIntl();
  const router = useRouter();
  const { user } = useUser();

  const goToChoosePlan = () => {
    router.push(Paths.CHOOSE_PLAN(encodeURIComponent(Paths.SETTINGS)));
  };

  return (
    <div>
      {user?.subscription && (
        <SubscriptionBox
          subscription={user?.subscription as StripeSubscription}
        />
      )}
      {!user?.subscription && (
        <div className={styles.subscriptionSection}>
          <span className={styles.inactiveLabel}>
            {intl.formatMessage(texts.noSubscription)}
          </span>
          <div
            data-cy={SubscriptionSectionSelectors.CHOOSE_PLAN_BUTTON}
            className={styles.choosePlanButton}
          >
            <Button
              rounded={false}
              onClick={goToChoosePlan}
              size="sm"
              fullWidth
            >
              {intl.formatMessage(texts.choosePlan)}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionSection;

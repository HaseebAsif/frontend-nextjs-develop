import React, { FC, useCallback } from 'react';

import { useIntl } from 'react-intl';

import { Button } from 'components/ui/general';
import { SubscriptionSectionSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { SubscriptionStatus } from 'consts/subscription';
import { useUser } from 'hooks';
import {
  StripeSubscription,
  useCreateStripeCustomerPortalMutation
} from 'types/graphql';
import { format } from 'utils/format';

import { texts } from './SubscriptionBox.texts';

import styles from './SubscriptionBox.module.scss';

interface SubscriptionBoxProps {
  subscription: StripeSubscription;
}

const SubscriptionBox: FC<SubscriptionBoxProps> = ({ subscription }) => {
  const active =
    subscription?.status === SubscriptionStatus.ACTIVE ||
    subscription?.status === SubscriptionStatus.TRIAL;
  const { planBillingInterval } = subscription;
  const { user } = useUser();
  const { cancelAtPeriodEnd, currentPeriodEnd } = subscription;

  const [fetchCustomerPortal] = useCreateStripeCustomerPortalMutation();
  const intl = useIntl();

  const redirectToStripeCustomerPortal = useCallback(async (url) => {
    if (url) {
      // @ts-ignore
      window.open(url, '_self');
    }
  }, []);

  const goToStripeCustomerPortal = useCallback(async () => {
    const { data: sessionData } = await fetchCustomerPortal({
      variables: {
        returnUrl: window.location.origin + Paths.PROCESSING(Paths.SETTINGS)
      }
    });
    await redirectToStripeCustomerPortal(
      sessionData?.createStripeCustomerPortal
    );
  }, [fetchCustomerPortal, redirectToStripeCustomerPortal]);

  const statusBox = () => {
    if (subscription?.amount) {
      return (
        <span className={styles.status}>
          {subscription.amount / 100}
          {planBillingInterval === 'month'
            ? intl.formatMessage(texts.monthSubscription)
            : intl.formatMessage(texts.yearSubscription)}
        </span>
      );
    }
  };

  return (
    <>
      {active && (
        <div>
          <div className={styles.subscriptionSection}>
            <div className={styles.subscriptionBox}>
              {statusBox()}
              {currentPeriodEnd && planBillingInterval === 'month' && (
                <span className={styles.type}>
                  {cancelAtPeriodEnd
                    ? intl.formatMessage(texts.subscriptionExpires)
                    : intl.formatMessage(texts.subscriptionRenew)}
                  {format.dateWithFormat(
                    user?.subscription?.currentPeriodEnd,
                    'd MMM yyyy'
                  )}
                </span>
              )}
              {currentPeriodEnd && planBillingInterval === 'year' && (
                <span className={styles.type}>
                  {cancelAtPeriodEnd
                    ? intl.formatMessage(texts.subscriptionExpires)
                    : intl.formatMessage(texts.subscriptionRenew)}

                  {format.dateWithFormat(
                    user?.subscription?.currentPeriodEnd,
                    'd MMM yyyy'
                  )}
                </span>
              )}
            </div>
            <div className={styles.buttonSection}>
              <div
                data-cy={SubscriptionSectionSelectors.HANDLE_BUTTON}
                className={styles.editButton}
              >
                <Button
                  rounded={false}
                  onClick={goToStripeCustomerPortal}
                  size="sm"
                  color="alpha93"
                  fullWidth
                >
                  {cancelAtPeriodEnd
                    ? intl.formatMessage(texts.renewSubscription)
                    : intl.formatMessage(texts.handleSubscription)}
                </Button>
              </div>
              {!cancelAtPeriodEnd && (
                <Button
                  rounded={false}
                  onClick={goToStripeCustomerPortal}
                  size="sm"
                  color="alpha93"
                  className={styles.cancelButton}
                >
                  {intl.formatMessage(texts.endSubscription)}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
      {!active && (
        <div className={styles.subscriptionSection}>
          <span className={styles.inactiveLabel}>
            {intl.formatMessage(texts.inactiveStatus)}
          </span>
          <div
            data-cy={SubscriptionSectionSelectors.HANDLE_BUTTON}
            className={styles.renewPlanButton}
          >
            <Button
              rounded={false}
              onClick={goToStripeCustomerPortal}
              size="sm"
              fullWidth
            >
              {intl.formatMessage(texts.renewSubscription)}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionBox;

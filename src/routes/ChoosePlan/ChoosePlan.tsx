import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Button, Container, Loading } from 'components/ui/general';
import { ChoosePlanSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useUrlQuery, useUser } from 'hooks';
import {
  useCreateStripeCheckoutPortalMutation,
  useProductsQuery
} from 'types/graphql';
import { isLocalhost, isStaging } from 'utils';
import { format } from 'utils/format';

import { texts } from './ChoosePlan.texts';

import styles from './ChoosePlan.module.scss';

const getStripeKey = () => {
  if (isStaging() || isLocalhost()) {
    // eslint-disable-next-line max-len
    return 'pk_test_51Iw4kZAtwSNCOKdY2tXip40CH250wUzDbY45qOQpFTt5SOS52Zc3leUMWsjd88R4c3ScE7BFVgs03r98cuUaJuGU00rweN9l0A';
  }
  return 'pk_live_51Iw4kZAtwSNCOKdYq7Tu25GS7d53m4rmIOPNkxe8l6oRebcqIMBL2GgEE9cncMIFKay9ylBAd8TKkpTsJ6IySrRO00WZNepDv8';
};

const stripePromise = loadStripe(getStripeKey());

type Plan = { name: string; info: string };

export const ChoosePlan = () => {
  const intl = useIntl();
  const params = useUrlQuery();
  const redirect = params.get('redirect') || '';
  const { data, loading } = useProductsQuery();
  const [fetchPortal] = useCreateStripeCheckoutPortalMutation();
  const { user } = useUser();
  const router = useRouter();
  const [selectedPriceId, setSelectedPriceId] = useState<undefined | string>(
    undefined
  );
  useEffect(() => {
    if (user?.subscription) router.replace(Paths.HOME);
  }, [user, router]);

  const redirectToStripe = useCallback(async (sessionId) => {
    if (sessionId) {
      const stripe = await stripePromise;
      stripe?.redirectToCheckout({
        sessionId
      });
    }
  }, []);

  const goToStripe = useCallback(
    async (id: string) => {
      const { data: sessionData } = await fetchPortal({
        variables: {
          input: {
            priceId: id,
            successUrl:
              window.location.origin +
              Paths.PROCESSING(encodeURIComponent(redirect)),
            cancelUrl: window.location.origin + (redirect || Paths.HOME)
          }
        }
      });
      await redirectToStripe(sessionData?.createStripeCheckoutPortal);
    },
    [fetchPortal, redirect, redirectToStripe]
  );

  const plans: Plan[] = useMemo(() => {
    return [
      {
        name: intl.formatMessage(texts.monthlyHeadline),
        info: intl.formatMessage(texts.monthlyText)
      },
      {
        name: intl.formatMessage(texts.yearlyHeadline),
        info: intl.formatMessage(texts.yearlyText)
      }
    ];
  }, [intl]);
  console.warn(data?.products);
  const subscriptionButtons = useCallback(() => {
    return data?.products.map((product) => {
      return product.prices.map((price) => (
        <div key={price.id}>
          <div
            data-cy={ChoosePlanSelectors.PLAN_BUTTON}
            className={styles.buttonShadow}
          >
            <Button
              onClick={() => setSelectedPriceId(price.id)}
              rounded={false}
              fullWidth
              naked
              className={classNames(styles.button, {
                [styles.selected]: price.id === selectedPriceId
              })}
            >
              <div className={styles.buttonContent}>
                <h6 className={styles.headline}>
                  {price.interval === 'year' ? plans[1].name : plans[0].name}
                </h6>

                <span className={styles.price}>
                  {format.currency((price.unitAmountDecimal as number) / 100, {
                    currency: price.currency
                  })}
                  <p className={styles.monthlyPayment}>
                    {price.interval === 'year'
                      ? intl.formatMessage(texts.discountOffer)
                      : intl.formatMessage(texts.monthlyTextPayment)}
                  </p>
                </span>
                <span className={styles.info}>
                  {price.interval === 'year' ? plans[1].info : plans[0].info}
                </span>
              </div>
            </Button>
          </div>
        </div>
      ));
    });
  }, [data?.products, intl, plans, selectedPriceId]);

  return (
    <div>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.container}>
        <h4 className={styles.title} data-cy={ChoosePlanSelectors.TITLE}>
          {intl.formatMessage(texts.title)}
        </h4>
        {loading && <Loading />}
        {!loading && (
          <div className={styles.subscriptionButtons}>
            {subscriptionButtons()}
            <Button
              className={styles.choosePlanButton}
              rounded={false}
              disabled={!selectedPriceId}
              type="button"
              color="secondary"
              fullWidth
              onClick={
                selectedPriceId ? () => goToStripe(selectedPriceId) : () => {}
              }
            >
              {intl.formatMessage(texts.choosePlanButton)}
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

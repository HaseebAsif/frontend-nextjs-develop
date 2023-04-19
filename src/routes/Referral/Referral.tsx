import React, { useContext, useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Text } from 'components/ui/forms';
import { Button, Container, Icon } from 'components/ui/general';
import { BackgroundContext } from 'context/background';
import { useUser } from 'hooks';
import { useUserCouponQuery } from 'types/graphql';
import { tracker } from 'utils';

import { Paths } from '../../consts/router';
import { SubscriptionStatus } from '../../consts/subscription';

import { texts } from './Referral.text';

import styles from './Referral.module.scss';

export const Referral = () => {
  const intl = useIntl();
  const { user } = useUser();
  const { register } = useForm();
  const { data } = useUserCouponQuery({
    skip:
      !user ||
      !(
        user.subscription?.status === SubscriptionStatus.ACTIVE ||
        user.subscription?.status === SubscriptionStatus.TRIAL
      )
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const [, setBackgroundColor] = useContext(BackgroundContext);

  useEffect(() => {
    setBackgroundColor('beta');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inputRef.current) return;
    const text = inputRef.current;
    const listener = () => {
      setIsCopied(true);
      tracker.trackEvent('Share link copied to clipboard', {
        'Form link': text.value
      });
    };
    text.addEventListener('copy', listener);
    text.addEventListener('cut', listener);

    return () => {
      text.removeEventListener('copy', listener);
      text.removeEventListener('cut', listener);
    };
  }, []);

  const handleCopy = () => {
    const text = inputRef.current;
    text?.select();
    if (!navigator.clipboard) {
      document.execCommand('copy');
    } else {
      navigator.clipboard.writeText(text?.value || '').then(() => {
        setIsCopied(true);
        tracker.trackEvent('Share link copied to clipboard', {
          'Form link': text?.value
        });
      });
    }
  };

  if (
    !user ||
    !(
      user.subscription?.status === SubscriptionStatus.ACTIVE ||
      user.subscription?.status === SubscriptionStatus.TRIAL
    )
  ) {
    return (
      <>
        <SEO title={intl.formatMessage(texts.seo)} />
        <Container className={styles.container}>
          <div>
            <div className={styles.headerSection}>
              <h3>{intl.formatMessage(texts.NoSubscribeHeader)}</h3>
            </div>
            <p className={styles.paragraph}>
              {intl.formatMessage(texts.NoSubscribeText)}
            </p>
            <p className={styles.bold}>
              {intl.formatMessage(texts.NoSubscribeCallToAction)}
            </p>
            <div className={styles.buttonsSection}>
              <Button href={Paths.CHOOSE_PLAN(Paths.REFERRAL)} fullWidth>
                {intl.formatMessage(texts.Register)}
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <SEO title={intl.formatMessage(texts.seo)} />
      <Container className={styles.container}>
        <div className={styles.block}>
          <div className={styles.headerSection}>
            <h5>{intl.formatMessage(texts.Heading)}</h5>
          </div>
          <ol className={styles.list}>
            <li>{intl.formatMessage(texts.ListItemOne)}</li>
            <li>{intl.formatMessage(texts.ListItemTwo)}</li>
            <li>{intl.formatMessage(texts.ListItemThree)}</li>
            <li>{intl.formatMessage(texts.ListItemFour)}</li>
            <li>{intl.formatMessage(texts.ListItemFive)}</li>
          </ol>
          <div className={styles.inputSection}>
            <div>
              <Text
                disabled
                register={register}
                name="coupon"
                className={styles.copyInput}
                inputRef={inputRef}
                label={intl.formatMessage(texts.CouponLabel)}
                defaultValue={data?.userCoupon?.promoCode}
              />
            </div>
            <div className={styles.buttonsSection}>
              <Button onClick={handleCopy}>
                {intl.formatMessage(texts.Copy)}
              </Button>
              {isCopied && (
                <Icon name="check" font="hobart" className={styles.icon} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

import React, { useCallback, useEffect, useState } from 'react';

import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { Portal, Link } from 'components/tools';
import { Button, Gutter } from 'components/ui/general';
import { GdprConsentSelectors } from 'consts/cypress';
import { Consents } from 'consts/gdpr';
import { Events } from 'consts/gtm';
import { Paths } from 'consts/router';
import { selectConsent, selectMadeDecision, setConsent } from 'redux/gdpr';
import { gtm } from 'utils';

import { texts } from './GdprConsent.text';

import styles from './GdprConsent.module.scss';

const GdprConsent = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  const [hasUpdatedConsent, setHasUpdatedConsent] = useState(false);
  const selectorMadeDecision = useSelector(selectMadeDecision);
  const selectorConsent = useSelector(selectConsent);

  const updateConsent = useCallback(
    (consent: Consents) => {
      dispatch(setConsent([consent]));
      setHasUpdatedConsent(true);
    },
    [dispatch]
  );

  useEffect(() => {
    if (hasUpdatedConsent) {
      gtm.push({
        dataLayer: {
          event: Events.Consent,
          consent: selectorConsent
        }
      });
    }
  }, [selectorConsent, hasUpdatedConsent]);

  if (!selectorMadeDecision) {
    return (
      <Portal>
        <div className={styles.root}>
          <Gutter gutter={{ bottom: 1 }}>
            <Gutter.Item>
              <h6>{formatMessage(texts.heading)}</h6>
              <p className={styles.text}>
                {formatMessage(texts.paragraph)}{' '}
                <Link href={Paths.LEGAL}>
                  {formatMessage(texts.policyLink)}
                </Link>
                .
              </p>
            </Gutter.Item>
            <Gutter.Item>
              <div className={styles.flexContainer}>
                <div
                  data-cy={GdprConsentSelectors.ACCEPT_BUTTON}
                  className={styles.buttonContainer}
                >
                  <Button
                    fullWidth
                    onClick={() => updateConsent(Consents.All)}
                    size="lg"
                    className={styles.button}
                  >
                    {formatMessage(texts.buttonAllow)}
                  </Button>
                </div>
                <div className={styles.buttonContainer}>
                  <Button
                    fullWidth
                    onClick={() => updateConsent(Consents.Necessary)}
                    ghost
                    size="lg"
                    className={styles.button}
                  >
                    {formatMessage(texts.buttonDecline)}
                  </Button>
                </div>
              </div>
            </Gutter.Item>
          </Gutter>
        </div>
      </Portal>
    );
  }

  return null;
};

export default GdprConsent;

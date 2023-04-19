import React from 'react';

import { useIntl } from 'react-intl';
import Lottie from 'react-lottie';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import animationData from 'components/ui/Lotties/study-animation-4.json';
import { EmailForm } from 'components/ui/onePager/EmailForm';
import { useBreakpoint } from 'hooks';

import { texts } from './Terms.texts';

import styles from './Terms.module.scss';

export const Terms = () => {
  const intl = useIntl();
  const { current } = useBreakpoint();

  const signUpAnimation = {
    loop: true,
    autoplay: true,
    animationData
  };

  return (
    <>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.root}>
        <div className={styles.header}>
          <h4>{intl.formatMessage(texts.privacyPolicyHeader)}</h4>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader1)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph1)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader2)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph2)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader3)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph3)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader4)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph4)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader5)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph5)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader6)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph6)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader7)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph7)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.privacyPolicySubHeader8)}</h5>
          <p>{intl.formatMessage(texts.privacyPolicyParagraph8)}</p>
        </div>
        <div className={styles.header}>
          <h4>{intl.formatMessage(texts.termsHeader)}</h4>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader1)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph1)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader2)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph2)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader3)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph3)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader4)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph4)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader5)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph5)}</p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader6)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph6)}</p>
          <p>
            <span className={styles.boldText}>
              {intl.formatMessage(texts.termsParagraph6GoogleHeadline)}
            </span>
            {intl.formatMessage(texts.termsParagraph6GoogleText)}
          </p>
          <p className={styles.subHeader}>
            <span className={styles.boldText}>
              {intl.formatMessage(texts.termsParagraph6MSClarityHeadline)}
            </span>
            {intl.formatMessage(texts.termsParagraph6MSClarityText)}
          </p>
          <p className={styles.subHeader}>
            <span className={styles.boldText}>
              {intl.formatMessage(texts.termsParagraph6FacebookHeadline)}
            </span>
            {intl.formatMessage(texts.termsParagraph6FacebookText)}
          </p>
          <p className={styles.subHeader}>
            <span className={styles.boldText}>
              {intl.formatMessage(texts.termsParagraph6SnapchatHeadline)}
            </span>
            {intl.formatMessage(texts.termsParagraph6SnapchatText)}
          </p>
          <p className={styles.subHeader}>
            <span className={styles.boldText}>
              {intl.formatMessage(texts.termsParagraph7GoogleOptimizeHeadline)}
            </span>
            {intl.formatMessage(texts.termsParagraph7GoogleOptimizeText)}
          </p>
        </div>
        <div>
          <h5>{intl.formatMessage(texts.termsSubHeader7)}</h5>
          <p>{intl.formatMessage(texts.termsParagraph7)}</p>
        </div>
      </Container>
      <Container fullWidth>
        <div className={styles.signUpContainer}>
          <p className={styles.signUpTitle}>
            {intl.formatMessage(texts.signUpLabel)}
            <EmailForm />
          </p>
          {current === 'lg' && (
            <div>
              <Lottie options={signUpAnimation} height={400} width={400} />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

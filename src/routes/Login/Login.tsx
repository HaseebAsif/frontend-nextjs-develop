import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Link, SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import { GoogleAppleLogin } from 'components/ui/webApp/GoogleAppleLogin';
import LoginEmailForm from 'components/ui/webApp/LoginEmailForm';
import { Paths } from 'consts/router';
import { useUrlQuery, useUser } from 'hooks';

import { texts } from './Login.texts';

import styles from './Login.module.scss';

export const Login = () => {
  const intl = useIntl();
  const params = useUrlQuery();
  const redirect = params.get('redirect') || undefined;
  const { loggedIn, newAccount } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (loggedIn) {
      if (newAccount) {
        router.replace(Paths.CHOOSE_PLAN(redirect));
        return;
      }
      router.replace(redirect || Paths.HOME);
    }
  }, [loggedIn, router, redirect, newAccount]);

  return (
    <>
      <SEO title={intl.formatMessage(texts.seo)} />
      <Container className={styles.container}>
        <div className={styles.form}>
          <h5 className={styles.title}>{intl.formatMessage(texts.title)}</h5>
          <GoogleAppleLogin
            googleText={intl.formatMessage(texts.googleLoginLabel)}
            appleText={intl.formatMessage(texts.appleLoginLabel)}
          />
          <fieldset className={styles.line}>
            <legend className={styles.lineText}>
              {intl.formatMessage(texts.lineLabel)}
            </legend>
          </fieldset>
          <LoginEmailForm />
          <p className={styles.registerLabel}>
            {`${intl.formatMessage(texts.registerLabel)} `}
            <Link href={Paths.REGISTER()} className={styles.registerLink}>
              {intl.formatMessage(texts.registerLink)}
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
};

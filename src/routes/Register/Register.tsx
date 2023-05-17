import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Button, Container } from 'components/ui/general';
import { GoogleAppleLogin } from 'components/ui/webApp/GoogleAppleLogin';
import { RegisterForm } from 'components/ui/webApp/RegisterForm/RegisterForm';
import { Paths } from 'consts/router';
import { useUrlQuery, useUser } from 'hooks';

import { texts } from './Register.texts';

import styles from './Register.module.scss';

export const Register = () => {
  const [email, setEmail] = useState(false);
  const router = useRouter();
  const intl = useIntl();

  const params = useUrlQuery();
  const redirect = params.get('redirect') || undefined;
  const { loggedIn, newAccount } = useUser();

  useEffect(() => {
    if (loggedIn) {
      if (newAccount) {
        router.replace(Paths.CHOOSE_PLAN(redirect));
        return;
      }

      router.replace(Paths.HOME);
    }
  }, [loggedIn, router, redirect, newAccount]);

  return (
    <>
      <SEO title={intl.formatMessage(texts.seo)} />
      <Container className={styles.container}>
        <div className={styles.form}>
          <Button
            color="alpha93"
            iconLeft={{ name: 'arrow-left' }}
            type="button"
            rounded={false}
            className={styles.arrowButton}
            onClick={() => router.replace(Paths.LOGIN())}
          />
          {!email && (
            <>
              <h5 className={styles.registerAccount}>
                {intl.formatMessage(texts.registerTitle)}
              </h5>
              <GoogleAppleLogin
                googleText={intl.formatMessage(texts.googleContinueLabel)}
                appleText={intl.formatMessage(texts.appleContinueLabel)}
              />
              <fieldset className={styles.line}>
                <legend className={styles.lineText}>
                  {intl.formatMessage(texts.lineLabel)}
                </legend>
              </fieldset>
            </>
          )}
          <RegisterForm setEmail={setEmail} />
        </div>
      </Container>
    </>
  );
};

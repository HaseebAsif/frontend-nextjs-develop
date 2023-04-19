import React, { useCallback, useContext, useState, FC, useEffect } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import AppleLogin from 'react-apple-login';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Container,
  Gutter,
  Icon,
  Information,
  Spinner
} from 'components/ui/general';
import { AppleError } from 'consts/errorMessage';
import { Consents } from 'consts/gdpr';
import { Events } from 'consts/gtm';
import { Paths } from 'consts/router';
import { TranslationsContext } from 'context/translations';
import { loginSuccess } from 'redux/auth';
import { selectConsent } from 'redux/gdpr';
import {
  useLoginAppleMutation,
  useLoginGoogleMutation,
  User
} from 'types/graphql';
import { gtm } from 'utils';

import { texts } from './GoogleAppleLogin.texts';

import styles from './GoogleAppleLogin.module.scss';

interface GoogleAppleLoginProps {
  googleText: string;
  appleText: string;
}

export const GoogleAppleLogin: FC<GoogleAppleLoginProps> = ({
  googleText,
  appleText
}) => {
  const router = useRouter();
  const intl = useIntl();
  const [googleLogin, { error: googleLoginError }] = useLoginGoogleMutation();
  const [appleLogin, { error: appleLoginError }] = useLoginAppleMutation();
  const [locale] = useContext(TranslationsContext);
  const consentDecision = useSelector(selectConsent);
  const consentAll = consentDecision.includes(Consents.All);

  const [googleError, setGoogleError] = useState<
    GoogleLoginResponse | GoogleLoginResponseOffline | null
  >(null);
  const [appleError, setAppleError] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const [loginInProgress, setLoginInProgress] = useState(false);

  useEffect(() => {
    if (loginInProgress) {
      if (appleLoginError || appleError) {
        setLoginInProgress(false);
      }
    }
  }, [appleError, appleLoginError, loginInProgress]);

  const getLocale = useCallback(() => {
    if (locale === 'SV') {
      return 'sv_SE';
    }

    return 'sv_SE';
  }, [locale]);

  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const token = (response as GoogleLoginResponse).getAuthResponse().id_token;
    const { data } = await googleLogin({ variables: { googleToken: token } });
    if (data?.loginGoogle.success) {
      dispatch(
        loginSuccess({
          token: data.loginGoogle.jwt,
          refreshToken: data.loginGoogle.refreshToken,
          user: data.loginGoogle.user as User,
          newAccount: data.loginGoogle.newAccount
        })
      );
      if (router.pathname === Paths.REGISTER())
        gtm.push({
          dataLayer: {
            event: Events.SignUp
          }
        });
    }
  };

  const onFailure = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    setGoogleError(response);
  };

  const loginApple = async (data: any) => {
    if (data?.code || data?.authorization?.code) {
      const appleToken = data?.code || data?.authorization?.code;

      const { data: gqlData } = await appleLogin({
        variables: {
          appleToken,
          firstName: data?.user?.name?.firstName,
          lastName: data?.user?.name?.lastName
        }
      });
      if (gqlData?.loginApple.success) {
        return dispatch(
          loginSuccess({
            token: gqlData.loginApple.jwt,
            refreshToken: gqlData.loginApple.refreshToken,
            user: gqlData.loginApple.user as User,
            newAccount: gqlData.loginApple.newAccount
          })
        );
      }
    }

    if (data.error.error === AppleError.POPUP_CLOSED_BY_USER) {
      return setLoginInProgress(false);
    }
    setAppleError(true);
  };

  const getRedirect = () => {
    return `${window?.location?.href}`;
  };

  return (
    <>
      <Container className={styles.container}>
        <Gutter gutter={{ bottom: 2 }}>
          <Gutter.Item>
            <div
              className={classNames(
                styles.buttonWrapper,
                styles.epsilonBackground
              )}
            >
              {consentAll && (
                <GoogleLogin
                  clientId="115173616696-4e7on71klajato47lvmrep19dcumfabl.apps.googleusercontent.com"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  render={(renderProps) => (
                    <Button
                      size="lg"
                      stripPadding
                      fullWidth
                      naked
                      onClick={renderProps.onClick}
                      className={styles.button}
                    >
                      <div className={styles.buttonContent}>
                        <Icon
                          name="google"
                          font="kopavogur"
                          className={styles.icon}
                        />
                        {googleText}
                      </div>
                    </Button>
                  )}
                />
              )}
              {!consentAll && (
                <Button
                  size="lg"
                  stripPadding
                  fullWidth
                  naked
                  disabled
                  className={styles.button}
                >
                  <div className={styles.buttonContent}>
                    <Icon
                      name="google"
                      font="kopavogur"
                      className={styles.icon}
                    />
                    {googleText}
                  </div>
                </Button>
              )}
            </div>
            {!consentAll && (
              <Information status="error" className={styles.errorLabel}>
                {intl.formatMessage(texts.continueWithGoogle)}
              </Information>
            )}
            {(!!googleError || !!googleLoginError) && (
              <Information status="error" className={styles.errorLabel}>
                {intl.formatMessage(texts.googleErrorMessage)}
              </Information>
            )}
          </Gutter.Item>
          <Gutter.Item>
            <div
              className={classNames(
                styles.buttonWrapper,
                styles.darkBackground
              )}
            >
              <AppleLogin
                responseType="code"
                usePopup
                clientId="se.booksquare.web"
                responseMode="form_post"
                redirectURI={getRedirect()}
                callback={(data) => loginApple(data)}
                scope="email name"
                designProp={{
                  locale: getLocale()
                }}
                render={(renderProps) => (
                  <Button
                    size="lg"
                    stripPadding
                    fullWidth
                    naked
                    onClick={() => {
                      setLoginInProgress(true);
                      renderProps.onClick();
                    }}
                    className={styles.button}
                  >
                    <div
                      className={classNames(
                        styles.buttonContent,
                        styles.darkBackground
                      )}
                    >
                      <Icon
                        name="apple"
                        font="toledo"
                        className={styles.icon}
                      />
                      {appleText}
                    </div>
                  </Button>
                )}
              />
            </div>
            {(!!appleError || !!appleLoginError) && (
              <Information status="error" className={styles.errorLabel}>
                {intl.formatMessage(texts.appleErrorMessage)}
              </Information>
            )}
          </Gutter.Item>
          {loginInProgress && (
            <Gutter.Item className={styles.loginSpinner}>
              <Spinner visible size="md" color="dark" />
            </Gutter.Item>
          )}
        </Gutter>
      </Container>
    </>
  );
};

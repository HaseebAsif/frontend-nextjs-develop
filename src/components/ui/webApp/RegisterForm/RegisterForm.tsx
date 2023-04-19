import React, { useCallback, useState, FC } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Link } from 'components/tools';
import { Text } from 'components/ui/forms';
import { Button, Gutter } from 'components/ui/general';
import { texts } from 'components/ui/webApp/RegisterForm/RegisterForm.texts';
import { Events } from 'consts/gtm';
import { Paths } from 'consts/router';
import { useValidate } from 'hooks';
import { loginSuccess } from 'redux/auth';
import { useCreateUserMutation, User } from 'types/graphql';
import { gtm } from 'utils';

import styles from './RegisterForm.module.scss';

interface RegisterFormProps {
  setEmail: (arg0: boolean) => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ setEmail }) => {
  const intl = useIntl();
  const [createUser, { loading, error }] = useCreateUserMutation();
  const { errors, handleSubmit, register } = useForm({
    shouldUnregister: false
  });
  const { isEmail } = useValidate();
  const [validEmail, setValidEmail] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async ({ email, firstName, lastName, password }) => {
      if (!validEmail) {
        setEmail(true);
        return setValidEmail(true);
      }

      const { data } = await createUser({
        variables: {
          input: { email, firstName, lastName, password }
        }
      });

      if (data?.createUser) {
        gtm.push({
          dataLayer: {
            event: Events.SignUp
          }
        });
        dispatch(
          loginSuccess({
            token: data?.createUser.jwt,
            refreshToken: data?.createUser.refreshToken,
            user: data?.createUser.user as User,
            newAccount: true
          })
        );
      }
    },
    [createUser, dispatch, setEmail, validEmail]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Gutter gutter={{ bottom: 2 }}>
        <div hidden={validEmail}>
          <Button rounded={false} fullWidth type="submit">
            {intl.formatMessage(texts.continueWithEmail)}
          </Button>
          <div className={styles.checkbox}>
            <span className={styles.checkboxText}>
              {`${intl.formatMessage(texts.termsLabel)} `}
              <Link href={Paths.LEGAL} className={styles.link}>
                {intl.formatMessage(texts.termsLink)}
              </Link>
            </span>
          </div>
        </div>
        {validEmail && (
          <>
            <div className={styles.registerAccount}>
              {intl.formatMessage(texts.registerTitle)}
            </div>
            <div className={styles.subTitle}>
              {intl.formatMessage(texts.emailLabel)}
            </div>
            <div className={styles.input}>
              <Text
                fullWidth
                size="lg"
                type="email"
                name="email"
                register={register}
                validation={{
                  required: true,
                  validate: isEmail
                }}
                error={errors.email}
              />
            </div>
            {!!error && (
              <div className={styles.errorLabel}>
                <p>{intl.formatMessage(texts.emailError)}</p>
              </div>
            )}
            <div className={styles.input}>
              {intl.formatMessage(texts.firstName)}
              <Text
                fullWidth
                size="lg"
                type="text"
                name="firstName"
                register={register}
                validation={{
                  required: true
                }}
                error={errors.firstName}
                disabled={loading}
              />
            </div>
            <div className={styles.input}>
              {intl.formatMessage(texts.lastName)}
              <Text
                fullWidth
                size="lg"
                type="text"
                name="lastName"
                register={register}
                validation={{
                  required: true
                }}
                error={errors.lastName}
                disabled={loading}
              />
            </div>
            <div className={styles.input}>
              {intl.formatMessage(texts.choosePassword)}
              <Text
                size="lg"
                className={styles.password}
                fullWidth
                type="password"
                name="password"
                register={register}
                validation={{
                  required: true
                }}
                error={errors.password}
                disabled={loading}
              />
            </div>
            <Button
              rounded={false}
              fullWidth
              type="submit"
              className={styles.submitButton}
              loading={loading}
            >
              {intl.formatMessage(texts.registerTitle)}
            </Button>
          </>
        )}
      </Gutter>
    </form>
  );
};

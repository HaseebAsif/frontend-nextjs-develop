import React, { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Link } from 'components/tools';
import { Text } from 'components/ui/forms';
import { Button, Gutter } from 'components/ui/general';
import { LoginSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useValidate, useUser } from 'hooks';
import { loginStart, setError } from 'redux/auth';
import { MutationLoginEmailArgs } from 'types/graphql';

import { texts } from './LoginEmailForm.texts';

import styles from './LoginEmailForm.module.scss';

const LoginEmailForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } =
    useForm<MutationLoginEmailArgs>({});
  const intl = useIntl();
  const { isEmail } = useValidate();
  const { error } = useUser();

  useEffect(() => {
    dispatch(setError(false));
  }, [dispatch]);

  const onSubmit = useCallback(
    ({ email, password }: MutationLoginEmailArgs) => {
      dispatch(loginStart({ email, password }));
      setValue('password', '');
    },
    [dispatch, setValue]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-cy={LoginSelectors.FORM}
      className={styles.form}
    >
      <Gutter gutter={{ bottom: 2 }}>
        <Gutter.Item data-cy={LoginSelectors.EMAIL}>
          <Text
            label={intl.formatMessage(texts.emailLabel)}
            size="lg"
            type="email"
            name="email"
            fullWidth
            register={register}
            validation={{
              required: true,
              validate: isEmail
            }}
            error={errors.email}
          />
        </Gutter.Item>
        <Gutter.Item data-cy={LoginSelectors.PASSWORD}>
          <Text
            label={intl.formatMessage(texts.passwordLabel)}
            size="lg"
            type="password"
            name="password"
            fullWidth
            register={register}
            validation={{
              required: true
            }}
            error={errors.password}
          />
        </Gutter.Item>
        <Gutter.Item className={styles.forgotSection}>
          <Link href={Paths.FORGOT_PASSWORD} className={styles.forgotLabel}>
            {intl.formatMessage(texts.forgotButton)}
          </Link>
        </Gutter.Item>
        <Gutter.Item>
          <Button type="submit" size="lg" rounded={false} fullWidth>
            {intl.formatMessage(texts.submitButton)}
          </Button>
        </Gutter.Item>
        {error && (
          <div data-cy={LoginSelectors.ERROR_RESPONSE}>
            {intl.formatMessage(texts.loginFail)}
          </div>
        )}
      </Gutter>
    </form>
  );
};

export default LoginEmailForm;

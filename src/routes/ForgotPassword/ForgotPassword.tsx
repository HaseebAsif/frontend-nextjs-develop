import React, { useCallback } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Text } from 'components/ui/forms';
import { Button, Container, Gutter } from 'components/ui/general';
import { ForgotPasswordSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useValidate } from 'hooks';
import { useResetPasswordInitiateMutation } from 'types/graphql';

import { texts } from './ForgotPassword.texts';

import styles from './ForgotPassword.module.scss';

export const ForgotPassword = () => {
  const intl = useIntl();
  const { isEmail } = useValidate();
  const { register, handleSubmit, reset, errors } = useForm();
  const router = useRouter();

  const [forgotPassword, { data, loading }] =
    useResetPasswordInitiateMutation();

  const onSubmit = useCallback(
    ({ email }) => {
      forgotPassword({
        variables: {
          email
        }
      });
      reset();
    },
    [reset, forgotPassword]
  );

  return (
    <div>
      <SEO title={intl.formatMessage(texts.title)} />
      <Container className={styles.container}>
        <Button
          color="alpha93"
          iconLeft={{ name: 'arrow-left' }}
          type="button"
          size="lg"
          rounded={false}
          className={styles.arrowButton}
          onClick={() => router.replace(Paths.LOGIN())}
        />
        <Gutter gutter={{ bottom: 2 }}>
          <Gutter.Item className={styles.infoText}>
            {intl.formatMessage(texts.info)}
          </Gutter.Item>
          {data !== undefined && (
            <Gutter.Item>
              <div data-cy={ForgotPasswordSelectors.RESPONSE}>
                {intl.formatMessage(texts.response)}
              </div>
            </Gutter.Item>
          )}
          <Gutter.Item>
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-cy={ForgotPasswordSelectors.FORM}
            >
              <Gutter gutter={{ bottom: 2 }}>
                <Gutter.Item
                  className={styles.emailLabel}
                  data-cy={ForgotPasswordSelectors.EMAIL}
                >
                  {intl.formatMessage(texts.email)}
                  <Text
                    size="lg"
                    type="email"
                    name="email"
                    disabled={loading}
                    fullWidth
                    register={register}
                    validation={{
                      required: {
                        value: true,
                        message: intl.formatMessage(texts.emptyValidation)
                      },
                      validate: isEmail
                    }}
                    error={errors.email}
                  />
                </Gutter.Item>
                <Gutter.Item>
                  <Button
                    disabled={loading}
                    loading={loading}
                    rounded={false}
                    type="submit"
                    fullWidth
                    size="lg"
                  >
                    {intl.formatMessage(texts.restoreLabel)}
                  </Button>
                </Gutter.Item>
              </Gutter>
            </form>
          </Gutter.Item>
        </Gutter>
      </Container>
    </div>
  );
};

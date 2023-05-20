import React, { useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Text } from 'components/ui/forms';
import { Button, Icon } from 'components/ui/general';
import { FooterFormSelectors } from 'consts/cypress';
import { useBreakpoint, useValidate } from 'hooks';
import { addToast } from 'redux/toast';
import { usePreSignupMutation } from 'types/graphql';

import { texts } from './NewsletterForm.texts';

import styles from './NewsletterForm.module.scss';

export const NewsletterForm = () => {
  const { isEmail } = useValidate();
  const { min } = useBreakpoint();
  const intl = useIntl();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: ''
    }
  });
  const isMobile = !min('sm');

  const [preSignup, { data, loading }] = usePreSignupMutation();

  const success = data?.preSignup.success;

  useEffect(() => {
    if (success) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.newsletterMessage),
          type: 'light'
        })
      );
    }
  }, [dispatch, intl, success]);

  const onSubmit = useCallback(
    async (submitData) => {
      const { email, trap } = submitData;
      if (trap) {
        return reset();
      }
      await preSignup({
        variables: {
          input: { email, newsletter: true }
        }
      });
      reset();
    },
    [preSignup, reset]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        data-cy={FooterFormSelectors.EMAIL_FORM}
      >
        <div className={styles.emailInputWrapper}>
          <Text
            borderless
            fullWidth
            color="alpha88"
            size="sm"
            type="email"
            name="email"
            placeholder={intl.formatMessage(texts.fieldPlaceholder)}
            register={register}
            validation={{
              required: true,
              validate: isEmail
            }}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.subscribeButton}
          >
            {isMobile ? (
              <Icon name="arrow-right" className={styles.arrow} />
            ) : (
              intl.formatMessage(texts.subscribeButton)
            )}
          </button>
        </div>
      </form>
    </>
  );
};

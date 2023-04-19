import React, { useCallback, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Link } from 'components/tools';
import { Checkbox, Text } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import { OnePagerSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useBreakpoint, useValidate } from 'hooks';
import { usePreSignupMutation } from 'types/graphql';

import { texts } from './EmailForm.texts';

import styles from './EmailForm.module.scss';

export const EmailForm = () => {
  const { isEmail } = useValidate();
  const intl = useIntl();
  const { min } = useBreakpoint();
  const isMobile = !min('sm');
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      email: '',
      newsletter: true
    }
  });
  const router = useRouter();

  const [preSignup, { data, loading, error }] = usePreSignupMutation();

  const success = data?.preSignup.success;

  useEffect(() => {
    if (success) {
      router.replace(Paths.CONFIRMATION);
    }
  }, [router, success]);

  const onSubmit = useCallback(
    async (submitData) => {
      const { email, newsletter, trap } = submitData;
      if (trap) {
        router.replace(Paths.CONFIRMATION);
        return reset();
      }
      await preSignup({
        variables: {
          input: { email, newsletter }
        }
      });
      reset();
    },
    [router, preSignup, reset]
  );

  return (
    <div>
      <form
        data-cy={OnePagerSelectors.EMAIL_FORM}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.input}>
          <div className={styles.textInput}>
            <Text
              fullWidth
              type="email"
              name="email"
              placeholder={intl.formatMessage(texts.emailLabel)}
              register={register}
              validation={{
                required: true,
                validate: isEmail
              }}
              error={errors.email}
            />
          </div>
          {!isMobile && (
            <div className={styles.submitButton}>
              <Button
                disabled={loading}
                loading={loading}
                rounded={false}
                type="submit"
              >
                {intl.formatMessage(texts.submitButton)}
              </Button>
            </div>
          )}
        </div>
        {isMobile && (
          <div>
            <Button
              disabled={loading}
              fullWidth
              loading={loading}
              rounded={false}
              type="submit"
            >
              {intl.formatMessage(texts.submitButton)}
            </Button>
          </div>
        )}
        <div>
          <Checkbox
            className={styles.text}
            label={intl.formatMessage(texts.newsletterLabel)}
            name="newsletter"
            register={register}
          />
        </div>
        <div className={styles.smallText}>
          {intl.formatMessage(texts.termsText)}
          <Link href={Paths.LEGAL} className={styles.link}>
            {intl.formatMessage(texts.termsLink)}
          </Link>
        </div>
        <div hidden>
          <Checkbox name="trap" register={register} />
        </div>
      </form>
      {!!error && (
        <div>
          <p>{intl.formatMessage(texts.submitError)}</p>
        </div>
      )}
    </div>
  );
};

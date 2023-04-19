import React, { FC, useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { Text } from 'components/ui/forms';
import { Button, Grid, Gutter, Icon } from 'components/ui/general';
import { Paths } from 'consts/router';
import { useValidate } from 'hooks';
import { getUser } from 'redux/auth';
import { ContactFormCategory, useSendContactFormMutation } from 'types/graphql';

import { texts } from './RequestBookForm.texts';

import styles from './RequestBookForm.module.scss';

type RequestBookArgs = {
  title: string;
  isbn: string;
  email: string;
};

interface RequestBookProps {}

export const RequestBookForm: FC<RequestBookProps> = () => {
  const intl = useIntl();
  const { isEmail } = useValidate();
  const { register, errors, handleSubmit, reset } = useForm();
  const [sendEmail, { error, loading }] = useSendContactFormMutation();
  const [success, setSuccess] = useState(false);
  const user = useSelector(getUser);

  const onSubmit = useCallback(
    async ({ title, email, isbn }: RequestBookArgs) => {
      try {
        await sendEmail({
          variables: {
            input: {
              name: title,
              email,
              message: `title: ${title} isbn: ${isbn}`,
              category: ContactFormCategory.Books
            }
          }
        });
        setSuccess(true);
      } catch {
        setSuccess(false);
      }

      reset();
    },
    [reset, sendEmail]
  );

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <h6>{intl.formatMessage(texts.title)}</h6>
      </div>
      {!success && !error && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Gutter gutter={{ bottom: 3 }}>
            <Gutter.Item>
              <Text
                type="text"
                name="title"
                register={register}
                label={intl.formatMessage(texts.titleLabel)}
                fullWidth
                validation={{
                  required: {
                    value: true,
                    message: intl.formatMessage(texts.emptyValidation)
                  }
                }}
                error={errors.title}
              />
            </Gutter.Item>
            <Gutter.Item>
              <Text
                type="text"
                name="isbn"
                register={register}
                label={intl.formatMessage(texts.isbnLabel)}
                fullWidth
              />
            </Gutter.Item>
            <Gutter.Item>
              <Text
                type="email"
                name="email"
                defaultValue={user?.email}
                register={register}
                label={intl.formatMessage(texts.emailLabel)}
                fullWidth
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
            <Gutter.Item className={styles.lastItem}>
              <Button
                size="lg"
                type="submit"
                rounded={false}
                fullWidth
                loading={loading}
              >
                {intl.formatMessage(texts.buttonLabel)}
              </Button>
            </Gutter.Item>
          </Gutter>
        </form>
      )}
      {error && (
        <Gutter gutter={{ bottom: 3 }}>
          <Gutter.Item className={styles.errorMessage}>
            <Icon name="exclamation-circle" className={styles.errorIcon} />
            <p>{intl.formatMessage(texts.errorMessage)}</p>
          </Gutter.Item>
        </Gutter>
      )}
      {success && (
        <>
          <Gutter gutter={{ bottom: 3 }} className={styles.success}>
            <Gutter.Item className={styles.successMessage}>
              <p>{intl.formatMessage(texts.successMessage)}</p>
            </Gutter.Item>
          </Gutter>
          <Grid
            classaName={styles.buttons}
            gutter={{ left: 3, bottom: 1 }}
            align="bottom"
          >
            <Grid.Item>
              <Button
                onClick={() => {
                  setSuccess(false);
                  reset();
                }}
                rounded={false}
              >
                {intl.formatMessage(texts.buttonRequestNew)}
              </Button>
            </Grid.Item>
            <Grid.Item>
              <Button href={Paths.HOME} rounded={false}>
                {intl.formatMessage(texts.buttonBackToHome)}
              </Button>
            </Grid.Item>
          </Grid>
        </>
      )}
    </div>
  );
};

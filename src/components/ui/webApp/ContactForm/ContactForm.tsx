import React, { FC, useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Text, SelectNative, Textarea } from 'components/ui/forms';
import { Button, Gutter, Icon } from 'components/ui/general';
import { ContactFormSelectors, HomeSelectors } from 'consts/cypress';
import { useValidate } from 'hooks';
import { useSendContactFormMutation, ContactFormCategory } from 'types/graphql';

import { texts } from './ContactForm.texts';

import styles from './ContactForm.module.scss';

type ContactFormArgs = {
  name: string;
  email: string;
  category: ContactFormCategory;
  message: string;
};

interface ContactFormProps {
  toggleContactForm?: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({ toggleContactForm }) => {
  const intl = useIntl();
  const { isEmail } = useValidate();
  const { register, errors, handleSubmit, reset } = useForm();
  const [done, setDone] = useState(false);

  const [sendEmail, { error, loading }] = useSendContactFormMutation();

  const onSubmit = useCallback(
    ({ name, email, category, message }: ContactFormArgs) => {
      sendEmail({
        variables: {
          input: {
            name,
            email,
            category,
            message
          }
        }
      });
      reset();
      setDone(true);
    },
    [reset, sendEmail]
  );

  const newQuestion = useCallback(() => {
    setDone(false);
  }, []);

  return (
    <div className={styles.contactForm}>
      <div className={styles.box}>
        <h6>{intl.formatMessage(texts.title)}</h6>
        <div data-cy={HomeSelectors.CLOSE_BUTTON}>
          {toggleContactForm && (
            <Button
              type="button"
              naked
              stripPadding
              onClick={toggleContactForm}
              className={styles.closeButton}
            >
              <Icon name="times" />
            </Button>
          )}
        </div>
      </div>
      {!done && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-cy={ContactFormSelectors.FORM}
        >
          <Gutter gutter={{ bottom: 3 }}>
            <Gutter.Item data-cy={ContactFormSelectors.NAME}>
              <Text
                size="lg"
                type="text"
                name="name"
                register={register}
                label={intl.formatMessage(texts.nameLabel)}
                fullWidth
                validation={{
                  required: {
                    value: true,
                    message: intl.formatMessage(texts.emptyValidation)
                  }
                }}
                error={errors.name}
              />
            </Gutter.Item>
            <Gutter.Item data-cy={ContactFormSelectors.EMAIL}>
              <Text
                size="lg"
                type="email"
                name="email"
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
            <Gutter.Item data-cy={ContactFormSelectors.CATEGORY_DROPDOWN}>
              <SelectNative
                size="lg"
                name="category"
                register={register}
                options={[
                  { value: '', label: '', disabled: true },
                  {
                    value: 'account',
                    label: intl.formatMessage(texts.categoryLabelOne)
                  },
                  {
                    value: 'subscription',
                    label: intl.formatMessage(texts.categoryLabelTwo)
                  },
                  {
                    value: 'technical',
                    label: intl.formatMessage(texts.categoryLabelThree)
                  },
                  {
                    value: 'books',
                    label: intl.formatMessage(texts.categoryLabelFour)
                  },
                  {
                    value: 'other',
                    label: intl.formatMessage(texts.categoryLabelFive)
                  }
                ]}
                defaultValue=""
                label={intl.formatMessage(texts.categoryLabel)}
                fullWidth
                validation={{
                  required: {
                    value: true,
                    message: intl.formatMessage(texts.emptyValidation)
                  }
                }}
                error={errors.category}
              />
            </Gutter.Item>
            <Gutter.Item data-cy={ContactFormSelectors.MESSAGE}>
              <Textarea
                size="lg"
                name="message"
                register={register}
                label={intl.formatMessage(texts.messageLabel)}
                fullWidth
                validation={{
                  required: {
                    value: true,
                    message: intl.formatMessage(texts.emptyValidation)
                  }
                }}
                error={errors.message}
              />
            </Gutter.Item>
            <Gutter.Item>
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
          <Gutter.Item
            data-cy={ContactFormSelectors.ERROR_RESPONSE}
            className={styles.errorMessage}
          >
            <Icon name="exclamation-circle" className={styles.errorIcon} />
            <p>{intl.formatMessage(texts.failMessage)}</p>
          </Gutter.Item>
          <Gutter.Item>
            <Button rounded={false} fullWidth onClick={newQuestion}>
              {intl.formatMessage(texts.newQuestionButton)}
            </Button>
          </Gutter.Item>
        </Gutter>
      )}
      {done && (
        <Gutter gutter={{ bottom: 3 }}>
          <Gutter.Item data-cy={ContactFormSelectors.SUCCESS_RESPONSE}>
            <p>{intl.formatMessage(texts.successMessage)}</p>
          </Gutter.Item>
          <Gutter.Item>
            <Button rounded={false} fullWidth onClick={newQuestion}>
              {intl.formatMessage(texts.newQuestionButton)}
            </Button>
          </Gutter.Item>
        </Gutter>
      )}
    </div>
  );
};

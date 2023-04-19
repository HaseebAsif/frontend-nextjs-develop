import React, { useCallback, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Text } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import {
  ChangePasswordFormSelectors,
  UserSettingsSelectors
} from 'consts/cypress';
import { useNotification } from 'hooks';
import { useUserChangePasswordMutation } from 'types/graphql';

import { texts } from './ChangePasswordForm.text';

import styles from './ChangePasswordForm.module.scss';

type ChangePasswordFormArgs = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordForm = () => {
  const intl = useIntl();
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, errors, watch } =
    useForm<ChangePasswordFormArgs>();

  const newPasswordWatch = watch('newPassword');

  const [changePassword, { data, loading, error }] =
    useUserChangePasswordMutation();

  useNotification(
    !!data,
    intl.formatMessage(texts.successMessage),
    !!error,
    intl.formatMessage(texts.errorMessage),
    {
      successCallback: () => setIsEditing(false),
      errorCallback: () => setIsEditing(false)
    }
  );

  const onSubmit = useCallback(
    async ({ newPassword, oldPassword }: ChangePasswordFormArgs) => {
      await changePassword({
        variables: {
          input: {
            oldPassword,
            newPassword
          }
        }
      });
    },
    [changePassword]
  );

  return (
    <div>
      {!isEditing && (
        <div className={styles.passwordSection}>
          <div className={styles.passwordBox}>
            <span className={styles.passwordLabel}>
              {intl.formatMessage(texts.password)}
            </span>
            <span>***********</span>
          </div>
          <div
            data-cy={UserSettingsSelectors.CHANGE_BUTTON}
            className={styles.editButton}
          >
            <Button
              size="sm"
              color="alpha93"
              rounded={false}
              onClick={() => setIsEditing(true)}
              fullWidth
            >
              {intl.formatMessage(texts.changePassword)}
            </Button>
          </div>
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div
              className={styles.input}
              data-cy={ChangePasswordFormSelectors.OLDPASSWORD}
            >
              <Text
                className={styles.password}
                fullWidth
                label={intl.formatMessage(texts.currentPassword)}
                type="password"
                name="oldPassword"
                register={register}
                validation={{
                  required: true,
                  minLength: {
                    value: 8,
                    message: intl.formatMessage(texts.passwordValidation)
                  }
                }}
                error={errors.oldPassword}
                disabled={loading}
              />
            </div>
            <div
              className={styles.input}
              data-cy={ChangePasswordFormSelectors.NEWPASSWORD}
            >
              <Text
                type="password"
                name="newPassword"
                disabled={loading}
                fullWidth
                label={intl.formatMessage(texts.newPassword)}
                register={register}
                validation={{
                  required: true,
                  minLength: {
                    value: 8,
                    message: intl.formatMessage(texts.passwordValidation)
                  }
                }}
                error={errors.newPassword}
              />
            </div>
            <div
              className={styles.input}
              data-cy={ChangePasswordFormSelectors.CONFIRMPASSWORD}
            >
              <Text
                type="password"
                name="confirmPassword"
                disabled={loading}
                fullWidth
                label={intl.formatMessage(texts.confirmPassword)}
                register={register}
                validation={{
                  required: true,
                  minLength: {
                    value: 8,
                    message: intl.formatMessage(texts.passwordValidation)
                  },
                  validate: (value) =>
                    value === newPasswordWatch ||
                    intl.formatMessage(texts.passwordMatch)
                }}
                error={errors.confirmPassword}
              />
            </div>
            <div className={styles.requirtmentTitle}>
              {intl.formatMessage(texts.passwordRequirtmentTitle)}
            </div>
            <div className={styles.requirtment}>
              {intl.formatMessage(texts.passwordRequirtment)}
            </div>

            <div className={styles.buttonSection}>
              <div
                data-cy={ChangePasswordFormSelectors.SAVE_BUTTON}
                className={styles.saveButton}
              >
                <Button
                  rounded={false}
                  type="submit"
                  fullWidth
                  size="sm"
                  loading={loading}
                >
                  {intl.formatMessage(texts.saveButton)}
                </Button>
              </div>
              <Button
                rounded={false}
                color="alpha93"
                fullWidth
                className={styles.cancelButton}
                size="sm"
                onClick={() => setIsEditing(false)}
              >
                {intl.formatMessage(texts.cancelButton)}
              </Button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ChangePasswordForm;

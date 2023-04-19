import React, { useCallback, useState, useMemo } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { Text, SelectNative } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import { UserInfoFormSelectors } from 'consts/cypress';
import { useNotification, useValidate } from 'hooks';
import { getUser } from 'redux/auth';
import {
  School,
  useUpdateUserMutation,
  Subject,
  JoinReasonOccupation,
  useAddSignupReasonMutation
} from 'types/graphql';

import { texts } from './UserInfoForm.text';

import styles from './UserInfoForm.module.scss';

type AccountSettingsArgs = {
  firstName: string;
  lastName: string;
  email: string;
  occupation: JoinReasonOccupation;
  school: School;
  subject: Subject;
};

const UserInfoForm = () => {
  const intl = useIntl();
  const [updateUser, { data, error, loading }] = useUpdateUserMutation();
  const [updateJoinReason] = useAddSignupReasonMutation();

  const user = useSelector(getUser);
  const { errors, handleSubmit, register } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      occupation: user?.joinReason?.occupation,
      school: user?.joinReason?.school,
      subject: user?.joinReason?.subject
    }
  });

  const { isEmail } = useValidate();
  const [isEditing, setIsEditing] = useState(false);
  const [isStudying, setIsStudying] = useState<boolean | null>(
    user?.joinReason?.occupation === 'studies'
  );

  const sortedTranslations = useCallback(
    (obj) =>
      Object.entries(obj)
        .map(([key, subjectEnum]) => {
          return typeof key === 'string' && typeof subjectEnum === 'string'
            ? [
                intl.formatMessage((texts as { [lorem: string]: any })[key]),
                subjectEnum
              ]
            : [];
        })
        .sort((a, b) => {
          if (a![0] > b![0]) return 1;
          if (a![0] < b![0]) return -1;
          return 0;
        }),
    [intl]
  );

  const occupationOptions = useMemo(() => {
    return sortedTranslations(JoinReasonOccupation).map(([label, value]) => {
      return typeof label === 'string' && typeof value === 'string'
        ? { label, value }
        : { label: '', value: '' };
    });
  }, [sortedTranslations]);

  const schoolOptions = useMemo(() => {
    return sortedTranslations(School).map(([label, value]) => {
      return typeof label === 'string' && typeof value === 'string'
        ? { label, value }
        : { label: '', value: '' };
    });
  }, [sortedTranslations]);

  const subjectOptions = useMemo(() => {
    return sortedTranslations(Subject).map(([label, value]) => {
      return typeof label === 'string' && typeof value === 'string'
        ? { label, value }
        : { label: '', value: '' };
    });
  }, [sortedTranslations]);

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

  const showTranslatedOccupations = (value: string) => {
    return occupationOptions.filter((key) => key!.value === value)?.[0]?.label;
  };

  const showTranslatedSchools = (value: any) => {
    return schoolOptions.filter((key) => key!.value === value)?.[0]?.label;
  };

  const showTranslatedSubjects = (value: any) => {
    return subjectOptions.filter((key) => key!.value === value)?.[0]?.label;
  };

  const onSubmit = useCallback(
    ({
      email,
      firstName,
      lastName,
      occupation,
      school,
      subject
    }: AccountSettingsArgs) => {
      if (!user) {
        return;
      }
      updateUser({
        variables: {
          id: user.id,
          input: { email, firstName, lastName }
        }
      });
      updateJoinReason({
        variables: {
          input: {
            occupation,
            school,
            subject
          }
        }
      });
    },
    [updateUser, user, updateJoinReason]
  );

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isEditing && (
          <div className={styles.settingsInfoSection}>
            <div className={styles.settingsInfoBox}>
              <span className={styles.label}>
                {intl.formatMessage(texts.name)}
              </span>
              <span
                className={styles.infoLine}
              >{`${user?.firstName} ${user?.lastName}`}</span>
              <span className={styles.label}>
                {intl.formatMessage(texts.email)}
              </span>
              <span className={styles.infoLine}>{user?.email}</span>
              <span className={styles.label}>
                {intl.formatMessage(texts.occupation)}
              </span>
              <span className={styles.infoLine}>
                {user?.joinReason?.occupation &&
                  showTranslatedOccupations(user?.joinReason?.occupation)}
              </span>
              {user?.joinReason?.occupation === 'studies' && (
                <>
                  <span className={styles.label}>
                    {intl.formatMessage(texts.school)}
                  </span>
                  <span className={styles.infoLine}>
                    {showTranslatedSchools(user?.joinReason?.school)}
                  </span>
                  <span className={styles.label}>
                    {intl.formatMessage(texts.subject)}
                  </span>
                  <span className={styles.infoLine}>
                    {showTranslatedSubjects(user?.joinReason?.subject)}
                  </span>
                </>
              )}
            </div>
            <div
              data-cy={UserInfoFormSelectors.EDIT_BUTTON}
              className={styles.editButton}
            >
              <Button
                rounded={false}
                color="alpha93"
                onClick={() => setIsEditing(true)}
                size="sm"
                fullWidth
              >
                {intl.formatMessage(texts.editButton)}
              </Button>
            </div>
          </div>
        )}
        {isEditing && (
          <div className={styles.editUserForm}>
            <div
              className={styles.input}
              data-cy={UserInfoFormSelectors.FIRSTNAME}
            >
              <Text
                fullWidth
                label={intl.formatMessage(texts.firstName)}
                placeholder={intl.formatMessage(texts.firstName)}
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
            <div
              className={styles.input}
              data-cy={UserInfoFormSelectors.LASTNAME}
            >
              <Text
                fullWidth
                label={intl.formatMessage(texts.lastName)}
                placeholder={intl.formatMessage(texts.lastName)}
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
            <div className={styles.input} data-cy={UserInfoFormSelectors.EMAIL}>
              <Text
                fullWidth
                label={intl.formatMessage(texts.email)}
                placeholder={intl.formatMessage(texts.email)}
                type="email"
                name="email"
                register={register}
                validation={{
                  required: true,
                  validate: isEmail
                }}
                error={errors.email}
                disabled={loading}
              />
            </div>
            <div className={styles.input}>
              <SelectNative
                size="lg"
                fullWidth
                register={register}
                label={intl.formatMessage(texts.occupation)}
                options={occupationOptions}
                onChange={(e) => {
                  setIsStudying(e.target.value === 'studies');
                }}
                name="occupation"
                validation={{
                  required: {
                    value: true,
                    message: intl.formatMessage(texts.errorMessage)
                  }
                }}
                defaultValue={user?.joinReason?.occupation}
              />
            </div>
            {isStudying && (
              <>
                <div className={styles.input}>
                  <SelectNative
                    size="lg"
                    fullWidth
                    register={register}
                    label={intl.formatMessage(texts.school)}
                    options={schoolOptions}
                    name="school"
                    defaultValue={
                      user?.joinReason?.school ? user?.joinReason?.school : ''
                    }
                  />
                </div>
                <div className={styles.input}>
                  <SelectNative
                    size="lg"
                    fullWidth
                    register={register}
                    label={intl.formatMessage(texts.subject)}
                    options={subjectOptions}
                    name="subject"
                    defaultValue={
                      user?.joinReason?.subject ? user?.joinReason?.subject : ''
                    }
                  />
                </div>
              </>
            )}
            <div className={styles.buttonSection}>
              <div
                data-cy={UserInfoFormSelectors.FORM_BUTTON}
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
        )}
      </form>
    </div>
  );
};

export default UserInfoForm;

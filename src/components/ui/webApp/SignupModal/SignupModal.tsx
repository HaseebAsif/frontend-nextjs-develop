import React, { useCallback } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { Radio, SelectNative } from 'components/ui/forms';
import { Button, Gutter } from 'components/ui/general';
import { Modal } from 'components/ui/modals';
import { useUser } from 'hooks';
import { getHasSignupReason, setSignupReason } from 'redux/auth';
import {
  JoinReasonOccupation,
  School,
  Subject,
  useAddSignupReasonMutation
} from 'types/graphql';

import { texts } from './SignupModal.text';

import styles from './SignupModal.module.scss';

const SignupModal = () => {
  const intl = useIntl();
  const schoolOptions: { label: string; value: string }[] = Object.entries(
    School
  ).map((entry) => ({
    label: intl.formatMessage((texts as { [lorem: string]: any })[entry[0]]),
    value: entry[1]
  }));
  const subjectOptions: { label: string; value: string }[] = Object.entries(
    Subject
  ).map((entry) => ({
    label: intl.formatMessage((texts as { [lorem: string]: any })[entry[0]]),
    value: entry[1]
  }));

  schoolOptions.unshift({
    label: intl.formatMessage(texts.selectSchool),
    value: ''
  });

  subjectOptions.unshift({
    label: intl.formatMessage(texts.selectSubject),
    value: ''
  });

  const [signupReasonMutation] = useAddSignupReasonMutation();

  const hasSignupReason = useSelector(getHasSignupReason);
  const dispatch = useDispatch();
  const { loggedIn } = useUser();

  const { register, handleSubmit, watch, getValues } = useForm();

  const onSubmit = useCallback(() => {
    const { occupation, school, subject } = getValues();
    signupReasonMutation({
      variables: {
        input: {
          occupation,
          school: school?.value || null,
          subject: subject?.value || null
        }
      }
    });
    dispatch(setSignupReason());
  }, [dispatch, getValues, signupReasonMutation]);

  const { occupation, school, subject } = watch();
  const isDisabled = useCallback(() => {
    if (!occupation) {
      return true;
    }
    if (occupation === JoinReasonOccupation.Studies) {
      return !(school && subject);
    }

    return false;
  }, [occupation, school, subject]);

  return (
    <Modal
      isOpen={!hasSignupReason && loggedIn}
      onClose={() => dispatch(setSignupReason())}
    >
      <form className={styles.modalWrapper} onSubmit={handleSubmit(onSubmit)}>
        <h6 className={styles.paddingDown}>
          {intl.formatMessage(texts.signupReasonHeader)}
        </h6>
        <Gutter gutter={{ bottom: 3 }} className={styles.paddingDown}>
          <Gutter.Item>
            <Radio
              name="occupation"
              register={register}
              value={JoinReasonOccupation.Studies}
              label={intl.formatMessage(texts.ReasonStudies)}
              validation={{
                required: true
              }}
            />
          </Gutter.Item>
          <Gutter.Item>
            <Radio
              name="occupation"
              register={register}
              value={JoinReasonOccupation.Work}
              label={intl.formatMessage(texts.ReasonWork)}
              validation={{
                required: true
              }}
            />
          </Gutter.Item>
          <Gutter.Item>
            <Radio
              name="occupation"
              register={register}
              value={JoinReasonOccupation.PersonalInterest}
              label={intl.formatMessage(texts.ReasonPersonal)}
              validation={{
                required: true
              }}
            />
          </Gutter.Item>
        </Gutter>
        <Gutter gutter={{ bottom: 3 }} className={styles.paddingDown}>
          {watch('occupation') === JoinReasonOccupation.Studies && (
            <>
              <Gutter.Item>
                <SelectNative
                  name="subject"
                  register={register}
                  options={subjectOptions}
                  defaultValue={intl.formatMessage(texts.selectSubject)}
                  fullWidth
                  size="lg"
                  className={styles.select}
                  validation={{
                    required: true
                  }}
                />
              </Gutter.Item>
              <Gutter.Item>
                <SelectNative
                  name="school"
                  register={register}
                  options={schoolOptions}
                  defaultValue={intl.formatMessage(texts.selectSchool)}
                  fullWidth
                  size="lg"
                  className={styles.select}
                  validation={{
                    required: true
                  }}
                />
              </Gutter.Item>
            </>
          )}
        </Gutter>
        <Gutter gutter={{ bottom: 2 }}>
          <Gutter.Item>
            <Button
              size="lg"
              disabled={isDisabled()}
              rounded={false}
              fullWidth
              type="submit"
              loading={false}
            >
              {intl.formatMessage(texts.save)}
            </Button>
          </Gutter.Item>
          <Gutter.Item>
            <Button
              rounded={false}
              fullWidth
              color="alpha93"
              onClick={() => dispatch(setSignupReason())}
            >
              {intl.formatMessage(texts.skip)}
            </Button>
          </Gutter.Item>
        </Gutter>
      </form>
    </Modal>
  );
};

export default SignupModal;

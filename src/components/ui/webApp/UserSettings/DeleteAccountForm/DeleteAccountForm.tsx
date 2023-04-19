import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Text } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import { Modal } from 'components/ui/modals';
import { Paths } from 'consts/router';
import { useUser } from 'hooks';
import { addToast } from 'redux/toast';
import { useDeleteUserMutation } from 'types/graphql';

import { texts } from './DeleteAccountForm.texts';

import styles from './DeleteAccountForm.module.scss';

const DeleteAccountForm = () => {
  const intl = useIntl();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { user } = useUser();
  const dispatch = useDispatch();
  const router = useRouter();

  const [deleteUser, { data, error, loading }] = useDeleteUserMutation({
    variables: { id: user?.id as string | number }
  });

  useEffect(() => {
    if (data) router.replace(Paths.DELETED_ACCOUNT('true'));
  }, [data, router]);

  useEffect(() => {
    if (error) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.errorMessage),
          type: 'error'
        })
      );
    }
  }, [dispatch, error, intl]);

  const onConfirmDelete = async () => {
    await deleteUser();
  };

  return (
    <div>
      <div className={styles.deleteSection}>
        <span className={styles.deleteInfo}>
          {intl.formatMessage(texts.deleteInfo)}
        </span>
        <Button
          rounded={false}
          size="sm"
          color="error"
          onClick={() => setIsModalOpen(true)}
        >
          {intl.formatMessage(texts.deleteAccount)}
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form
          className={styles.modalWrapper}
          onSubmit={handleSubmit(onConfirmDelete)}
        >
          <h6>{intl.formatMessage(texts.deleteAccount)}</h6>
          <p className={styles.confirmInfo}>
            {intl.formatMessage(texts.confirmInfoPartOne)}
            <b>{intl.formatMessage(texts.delete)}</b>
            {intl.formatMessage(texts.confirmInfoPartTwo)}
          </p>
          <Text
            name="confirmDelete"
            register={register}
            validation={{
              required: true || intl.formatMessage(texts.requiredMessage),
              validate: {
                correctSpelling: (value) => {
                  return (
                    !(value && value !== 'delete') ||
                    intl.formatMessage(texts.validationMessage)
                  );
                }
              }
            }}
            error={errors.confirmDelete}
          />
          <div className={styles.buttonSection}>
            <Button
              size="lg"
              color="error"
              rounded={false}
              className={styles.confirmButton}
              type="submit"
              loading={loading}
            >
              {intl.formatMessage(texts.deleteAccount)}
            </Button>
            <Button
              size="lg"
              color="alpha93"
              rounded={false}
              onClick={() => setIsModalOpen(false)}
            >
              {intl.formatMessage(texts.cancelButton)}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DeleteAccountForm;

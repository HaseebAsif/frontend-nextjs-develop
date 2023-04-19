import React, { FC, useCallback, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Text } from 'components/ui/forms';
import { Button } from 'components/ui/general';
import { OnePagerSelectors } from 'consts/cypress';
import { addToast } from 'redux/toast';
import { useCreateBookmarkMutation } from 'types/graphql';

import { texts } from './BookmarkForm.texts';

import styles from './BookmarkForm.module.scss';

interface BookmarkFormProps {
  bookId: string;
  epubPage?: string;
  pdfPage?: number;
  refetch: () => void;
}

const BookmarkForm: FC<BookmarkFormProps> = ({
  bookId,
  epubPage,
  pdfPage,
  refetch
}) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      title: ''
    }
  });

  const [createBookmark, { data, loading, error }] =
    useCreateBookmarkMutation();

  useEffect(() => {
    // TODO: handle error?
    if (data) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.bookmarkCreatedText)
        })
      );
    }
  }, [data, dispatch, intl]);

  useEffect(() => {
    // TODO: handle error?
    if (error) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.bookmarkErrorText),
          type: 'error'
        })
      );
    }
  }, [dispatch, error, intl]);

  const onSubmit = useCallback(
    async (submitData) => {
      const { title } = submitData;
      await createBookmark({
        variables: {
          input: { bookId, title, epubPage, pdfPage }
        }
      });
      reset();
      refetch();
    },
    [bookId, createBookmark, epubPage, pdfPage, refetch, reset]
  );

  return (
    <div>
      <form
        data-cy={OnePagerSelectors.EMAIL_FORM}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <Text
          type="text"
          name="title"
          fullWidth
          register={register}
          validation={{
            required: true
          }}
          error={errors.title}
        />

        <Button
          className={styles.button}
          disabled={loading}
          loading={loading}
          rounded={false}
          size="lg"
          type="submit"
        >
          {intl.formatMessage(texts.button)}
        </Button>
      </form>
    </div>
  );
};

export default BookmarkForm;

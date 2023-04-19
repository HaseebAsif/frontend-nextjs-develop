import React, { useCallback, useEffect } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import Truncate from 'react-text-truncate';

import { Portal } from 'components/tools';
import { Button, Icon } from 'components/ui/general';
import { useBreakpoint } from 'hooks';
import { addToast } from 'redux/toast';
import {
  Bookmark,
  useBookmarksLazyQuery,
  useDeleteBookmarkMutation
} from 'types/graphql';

import BookmarkForm from './BookmarkForm/BookmarkForm';
import { texts } from './Bookmarks.texts';

import styles from './Bookmarks.module.scss';

interface BookmarksRenderProps {
  bookId: string;
  visible: boolean;
  setLocation(location: string | number): void;
  close: () => void;
  currentLocation: string | number | null;
}

interface BookmarksItemProps {
  bookmark: Bookmark;
  onNavigate: (loc: Bookmark['pdfPage'] | Bookmark['epubPage']) => void;
  refetch: () => void;
}

export const BookmarksRender = ({
  bookId,
  visible,
  setLocation,
  close,
  currentLocation
}: BookmarksRenderProps) => {
  const { min } = useBreakpoint();
  const intl = useIntl();

  const onNavigate = useCallback(
    (location) => {
      setLocation(location);
      close();
    },
    [close, setLocation]
  );

  const [getBookmarks, { data: { bookmarks: { edges = [] } = {} } = {} }] =
    useBookmarksLazyQuery({ fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    getBookmarks({ variables: { filter: { bookId } } });
  }, [bookId, getBookmarks]);

  const refetch = useCallback(() => {
    getBookmarks({ variables: { filter: { bookId } } });
  }, [bookId, getBookmarks]);

  if (!visible) {
    return null;
  }

  return (
    <>
      {min('lg') && (
        <div className={styles.bookmarksPicker}>
          <div className={styles.controls}>
            <div
              className={classNames(
                styles.contentButton,
                styles.titleRow,
                styles.center
              )}
            >
              <h6> {intl.formatMessage(texts.bookmarksMenuTitle)}</h6>
              <Button
                size="md"
                onClick={close}
                naked
                rounded={false}
                className={styles.closeButton}
              >
                <Icon name="times" />
              </Button>
            </div>
            <BookmarkForm
              bookId={bookId}
              epubPage={
                typeof currentLocation === 'string'
                  ? currentLocation
                  : undefined
              }
              pdfPage={
                typeof currentLocation === 'number'
                  ? currentLocation
                  : undefined
              }
              refetch={refetch}
            />
          </div>
          <div className={styles.scroll}>
            {edges?.map((bookmark, i: number) => (
              <BookmarkItem
                bookmark={bookmark}
                onNavigate={onNavigate}
                refetch={refetch}
                // eslint-disable-next-line react/no-array-index-key
                key={i}
              />
            ))}
          </div>
        </div>
      )}
      {!min('lg') && (
        <Portal>
          <div className={styles.root}>
            <div className={styles.bookmarksPicker}>
              <div className={styles.controls}>
                <div
                  className={classNames(
                    styles.contentButton,
                    styles.titleRow,
                    styles.center
                  )}
                >
                  <h6> {intl.formatMessage(texts.bookmarksMenuTitle)}</h6>
                  <Button
                    size="md"
                    onClick={close}
                    naked
                    rounded={false}
                    className={styles.closeButton}
                  >
                    <Icon name="times" />
                  </Button>
                </div>
                <BookmarkForm
                  bookId={bookId}
                  epubPage={
                    typeof currentLocation === 'string'
                      ? currentLocation
                      : undefined
                  }
                  pdfPage={
                    typeof currentLocation === 'number'
                      ? currentLocation
                      : undefined
                  }
                  refetch={refetch}
                />
              </div>
              <div className={styles.scroll}>
                {edges?.map((bookmark, i: number) => (
                  <BookmarkItem
                    bookmark={bookmark}
                    onNavigate={onNavigate}
                    refetch={refetch}
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

const BookmarkItem = ({
  bookmark,
  onNavigate,
  refetch
}: BookmarksItemProps) => {
  const goToPage = () =>
    bookmark.pdfPage
      ? onNavigate(bookmark.pdfPage)
      : onNavigate(bookmark.epubPage);

  const intl = useIntl();
  const dispatch = useDispatch();
  const [deleteBookmarkFn, { data, error }] = useDeleteBookmarkMutation();

  useEffect(() => {
    if (data) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.bookmarkDeletedText)
        })
      );
    }
    refetch();
  }, [dispatch, data, refetch, intl]);

  useEffect(() => {
    if (error) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.bookmarkErrorText),
          type: 'error'
        })
      );
    }
  }, [dispatch, error, intl]);

  return (
    <div className={classNames(styles.bookmarksItem, styles.hoverIcon)}>
      <Button
        size="md"
        onClick={goToPage}
        naked
        rounded={false}
        stripPadding
        fullWidth
      >
        <div className={styles.contentButton}>
          <div className={styles.titleWrapper}>
            <Truncate
              truncateText="..."
              line={2}
              containerClassName={styles.title}
              text={bookmark.title}
            />
          </div>
          <div className={styles.titleIconWrapper}>
            <Icon name="arrow-right" />
          </div>
        </div>
      </Button>
      <Button
        size="md"
        onClick={async () => {
          await deleteBookmarkFn({ variables: { id: bookmark.id } });
        }}
        naked
        rounded={false}
        stripPadding
        iconLeft={{ name: 'trash-alt' }}
        className={styles.deleteButton}
      />
    </div>
  );
};

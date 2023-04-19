import React, { FC, useCallback, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Link } from 'components/tools';
import { Button, Image } from 'components/ui/general';
import { MissingBookCover } from 'components/ui/webApp/MissingBookCover';
import { BookItemHoveredSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { SubscriptionStatus } from 'consts/subscription';
import { useUrlQuery, useUser } from 'hooks';
import { addToast } from 'redux/toast';
import { Book, UserRole, useSetFavouriteMutation } from 'types/graphql';
import { createURLTitle, resizeImage } from 'utils';

import { texts } from './BookItemHovered.text';

import styles from './BookItemHovered.module.scss';

interface BookItemProps {
  book: Book;
  showModal: () => void;
}

const BookItemHovered: FC<BookItemProps> = ({ book, showModal }) => {
  const intl = useIntl();
  const [setFavourite, { data }] = useSetFavouriteMutation();
  const { loggedIn, user } = useUser();
  const router = useRouter();
  const params = useUrlQuery();
  const dispatch = useDispatch();
  const title = createURLTitle(book.title);

  useEffect(() => {
    if (data && !data?.setFavourite.favourite) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.favouriteRemoved),
          type: 'light'
        })
      );
    }
    if (data && data?.setFavourite.favourite) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.favouriteAdded),
          type: 'light'
        })
      );
    }
  }, [data, dispatch, intl]);

  const readBook = useCallback(() => {
    if (!loggedIn) {
      // TODO VALIDATE THAT THIS WORK
      const redirect = `${router.pathname}?${params.toString()}`;
      return router.push(Paths.REGISTER(encodeURIComponent(redirect)));
    }
    if (
      user?.role !== UserRole.Admin &&
      (user?.subscription == null ||
        !(
          user.subscription.status === SubscriptionStatus.ACTIVE ||
          user.subscription.status === SubscriptionStatus.TRIAL
        ))
    ) {
      return showModal();
    }

    router.push(Paths.READER(book.id as string));
  }, [
    loggedIn,
    user?.role,
    user?.subscription,
    router,
    book.id,
    params,
    showModal
  ]);

  const toggleFavourite = async () => {
    if (!loggedIn) {
      // TODO VALIDATE THAT THIS WORK
      const redirect = `${router.pathname}?${params.toString()}`;
      return router.push(Paths.REGISTER(encodeURIComponent(redirect)));
    }

    await setFavourite({
      variables: {
        id: book.id,
        favourite: !(book.tracking?.favourite as boolean)
      }
    });
  };

  return (
    <div>
      <Link
        href={Paths.BOOK_INFO(title, book.isbn)}
        data-cy={BookItemHoveredSelectors.INFO_BUTTON}
      >
        <div className={styles.box}>
          <div className={styles.imgWrapper}>
            {book.image?.uri ? (
              <Image
                src={resizeImage(book.image?.uri, 340, 440)}
                backup={book?.image.uri}
                alt={`${book.title} ${book.isbn}`}
                fit="contain"
                cover
                className={styles.img}
                width={340}
                height={440}
              />
            ) : (
              <MissingBookCover />
            )}
          </div>
        </div>
      </Link>
      <div className={styles.buttonsBox}>
        <Button
          onClick={readBook}
          rounded={false}
          size="md"
          className={styles.readButton}
        >
          {intl.formatMessage(texts.readBookLabel)}
        </Button>
        <div data-cy={BookItemHoveredSelectors.FAVOURITE_BUTTON}>
          {book.tracking?.favourite && (
            <Button
              iconLeft={{ name: 'heart', font: 'lissabon' }}
              rounded={false}
              size="md"
              className={styles.iconButton}
              onClick={toggleFavourite}
              color="alpha93"
            />
          )}
          {!book.tracking?.favourite && (
            <Button
              iconLeft={{ name: 'heart', font: 'stockholm' }}
              rounded={false}
              size="md"
              className={styles.iconButton}
              onClick={toggleFavourite}
              color="alpha93"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItemHovered;

import React, { FC } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import Truncate from 'react-text-truncate';

import { Link } from 'components/tools';
import { Image } from 'components/ui/general';
import { MissingBookCover } from 'components/ui/webApp/MissingBookCover';
import { BookItemSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { Book } from 'types/graphql';
import { createURLTitle, resizeImage } from 'utils';

import styles from './BookItem.module.scss';

interface BookItemProps {
  book: Book;
  searchResultItem?: boolean;
}

export const BookItem: FC<BookItemProps> = ({
  book,
  searchResultItem = false
}) => {
  const { pathname } = useRouter();
  const title = createURLTitle(book.title);

  return (
    <Link
      href={Paths.BOOK_INFO(title, book.isbn, pathname)}
      data-cy={BookItemSelectors.BOOK_ITEM}
    >
      <div
        className={classNames(styles.box, {
          [styles.searchItemBox]: searchResultItem
        })}
      >
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
      <div className={styles.textBox}>
        <Truncate
          truncateText="..."
          line={2}
          containerClassName={styles.bookTitle}
          text={book.title}
        />
        <Truncate
          truncateText="..."
          line={1}
          containerClassName={styles.author}
          text={book.authors.map((author) => author.name).join(', ')}
        />
        <span className={styles.author} />
        <span className={styles.year}>{book.releaseYear}</span>
      </div>
    </Link>
  );
};

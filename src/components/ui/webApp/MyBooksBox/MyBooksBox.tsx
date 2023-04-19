import React, { FC } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button, Icon, Grid } from 'components/ui/general';
import { BookItem } from 'components/ui/webApp/BookItem';
import { useBreakpoint } from 'hooks';
import { Book } from 'types/graphql';

import { texts } from './MyBooksBox.texts';

import styles from './MyBooksBox.module.scss';

interface MyBooksBoxProps {
  headline: string;
  books: Book[];
  targetPath: string;
}

export const MyBooksBox: FC<MyBooksBoxProps> = ({
  headline,
  books,
  targetPath
}) => {
  const { equal } = useBreakpoint();
  const intl = useIntl();
  const router = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.boxHeader}>
        <Button
          naked
          onClick={() => router.push(targetPath)}
          size="sm"
          stripPadding
          type="button"
        >
          <h6>{headline}</h6> <Icon name="arrow-right" />
        </Button>
      </div>
      {equal('xs') ? (
        <div className={styles.scrollBox}>
          <div className={styles.scrollBoxWrapper}>
            <div className={styles.scrollBoxContainer} role="list">
              {books.map((book) => {
                return (
                  <div
                    key={book.id}
                    role="listitem"
                    className={styles.bookItem}
                  >
                    <BookItem book={book} />
                  </div>
                );
              })}
              {books.length > 2 && (
                <div className={styles.showAllButton} role="listitem">
                  <div>
                    <p>{intl.formatMessage(texts.showAllText)}</p>
                    <Icon name="arrow-right" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Grid gutter={{ left: { sm: 4, lg: 5 } }}>
          {books.slice(0, 3).map((book) => {
            return (
              <Grid.Item key={book.id} width={4}>
                <BookItem book={book} />
              </Grid.Item>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

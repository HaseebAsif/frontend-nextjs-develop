import React, { useContext, useEffect, useState } from 'react';

import { sha512 } from 'js-sha512';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { EpubReader } from 'components/ui/webApp/EpubReader';
import { PdfReader } from 'components/ui/webApp/PdfReader';
import { BackgroundContext } from 'context/background';
import { useUrlQuery, useUser } from 'hooks';
import { Book, useBookUrlLazyQuery } from 'types/graphql';

import { texts } from './Reader.texts';

import styles from './Reader.module.scss';

export const Reader = () => {
  const intl = useIntl();
  const queryParams = useUrlQuery();
  const id = queryParams.get('id') || undefined;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setBackgroundcolor] = useContext(BackgroundContext);
  const [hide, setHide] = useState(false);
  const me = useUser();

  useEffect(() => {
    setBackgroundcolor('delta');
    const beforePrint = () => setHide(true);
    const afterPrint = () => setHide(false);
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
      setBackgroundcolor(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [getBook, { data: { bookUrl: book = null } = {}, error }] =
    useBookUrlLazyQuery({
      fetchPolicy: 'no-cache'
    });

  useEffect(() => {
    getBook({
      variables: {
        id: id as string,
        checksum: sha512.array(`${me?.user?.id}${id}`).toString()
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!book) {
    return null;
  }

  return (
    <>
      <SEO title={'reader'.toString()} />
      {book.format === 'epub' && !error && (
        <div className={styles.root}>
          {hide && <div className={styles.block} />}
          <EpubReader
            book={book as Book}
            refetch={() => {
              getBook({
                variables: {
                  id: id as string,
                  checksum: sha512.array(`${me?.user?.id}${id}`).toString()
                }
              });
            }}
          />
        </div>
      )}
      {book.format === 'pdf' && !error && (
        <div className={styles.root}>
          {hide && <div className={styles.block} />}
          <PdfReader
            book={book as Book}
            refetch={() => {
              getBook({
                variables: {
                  id: id as string,
                  checksum: sha512.array(`${me?.user?.id}${id}`).toString()
                }
              });
            }}
          />
        </div>
      )}
      {error && (
        <div className={styles.root}>
          <div className={styles.center}>
            <span>{intl.formatMessage(texts.error)}</span>
          </div>
        </div>
      )}
    </>
  );
};

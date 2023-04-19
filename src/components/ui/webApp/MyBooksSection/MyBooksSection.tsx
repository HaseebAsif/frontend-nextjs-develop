import React, { useEffect } from 'react';

import { useIntl } from 'react-intl';

import { Grid, Icon, Loading } from 'components/ui/general';
import { MyBooksBox } from 'components/ui/webApp/MyBooksBox';
import { NoBooksBox } from 'components/ui/webApp/NoBooksBox';
import { Paths } from 'consts/router';
import { Book, useBooksLazyQuery } from 'types/graphql';

import { texts } from './MyBooksSection.texts';

import styles from './MyBooksSection.module.scss';

export const MyBooksSection = () => {
  const intl = useIntl();

  const [getFavourites, { data: favouriteData, loading: favouriteLoading }] =
    useBooksLazyQuery();

  const [getLastRead, { data: lastReadData, loading: lastReadLoading }] =
    useBooksLazyQuery();

  useEffect(() => {
    getLastRead({
      variables: {
        filter: {
          limit: 4,
          lastRead: true
        }
      }
    });
  }, [getLastRead]);

  useEffect(() => {
    getFavourites({
      variables: {
        filter: {
          limit: 4,
          favourite: true
        }
      }
    });
  }, [getFavourites]);

  return (
    <>
      <Grid gutter={{ bottom: 4, left: { root: 3, lg: 5 } }}>
        <Grid.Item width={{ root: 12, lg: 6 }}>
          {lastReadLoading && (
            <div className={styles.box}>
              <Loading />
            </div>
          )}
          {!!lastReadData?.books.edges.length && (
            <MyBooksBox
              headline={intl.formatMessage(texts.lastRead)}
              books={lastReadData.books.edges as Book[]}
              targetPath={Paths.SEARCH_LAST_READ()}
            />
          )}
          {!lastReadData?.books.edges.length && (
            <NoBooksBox headline={intl.formatMessage(texts.lastRead)}>
              <p>{intl.formatMessage(texts.lastReadInfo)}</p>
            </NoBooksBox>
          )}
        </Grid.Item>
        <Grid.Item width={{ root: 12, lg: 6 }}>
          {favouriteLoading && (
            <div className={styles.box}>
              <Loading />
            </div>
          )}
          {!!favouriteData?.books.edges.length && (
            <MyBooksBox
              headline={intl.formatMessage(texts.myLibrary)}
              books={favouriteData.books.edges as Book[]}
              targetPath={Paths.SEARCH_FAVOURITES()}
            />
          )}
          {!favouriteData?.books.edges.length && (
            <NoBooksBox headline={intl.formatMessage(texts.myLibrary)}>
              <p>
                {intl.formatMessage(texts.myLibraryInfo)} <Icon name="heart" />
              </p>
            </NoBooksBox>
          )}
        </Grid.Item>
      </Grid>
    </>
  );
};

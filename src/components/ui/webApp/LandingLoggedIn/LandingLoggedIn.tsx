import React from 'react';

import { useIntl } from 'react-intl';

import { apolloClient as client } from 'api/apollo';
import { Container } from 'components/ui/general';
import { MyBooksSection } from 'components/ui/webApp/MyBooksSection';
import { SearchBooksField } from 'components/ui/webApp/SearchBooksField';
import { HomeSelectors, LandingLoggedInSelectors } from 'consts/cypress';
import { useUser } from 'hooks';
import { BooksDocument } from 'types/graphql';

import { texts } from './LandingLoggedIn.texts';

import styles from './LandingLoggedIn.module.scss';

export const LandingLoggedIn = ({ total }: { total?: number }) => {
  const intl = useIntl();
  const { user } = useUser();

  return (
    <Container className={styles.root}>
      <div
        className={styles.searchIntro}
        data-cy={LandingLoggedInSelectors.HERO}
      >
        <h5>
          {total
            ? `${intl.formatMessage(texts.welcomeBack)} ${user?.firstName}.`
            : `${intl.formatMessage(texts.welcome)} ${user?.firstName}.`}
        </h5>
      </div>
      <div className={styles.searchBar} data-cy={HomeSelectors.SEARCH_FIELD}>
        <SearchBooksField
          placeholder={intl.formatMessage(texts.searchPlaceholder)}
        />
      </div>
      <MyBooksSection />
    </Container>
  );
};

export async function getServerSideProps() {
  const { data: { books: { meta: { total = 0 } = {} } = {} } = {} } =
    await client.query({
      query: BooksDocument,
      variables: {
        filter: {
          limit: 20,
          lastRead: true
        }
      }
    });

  return {
    props: { total } // will be passed to the page component as props
  };
}

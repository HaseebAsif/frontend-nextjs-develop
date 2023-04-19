import React, { useState } from 'react';

import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import { useIntl } from 'react-intl';
import Truncate from 'react-text-truncate';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import { SearchBarSticky } from 'components/ui/webApp/SearchBarSticky';
import { SearchResults } from 'components/ui/webApp/SearchResults';
import { Paths } from 'consts/router';

import { texts } from './SearchBooks.texts';

import styles from './SearchBooks.module.scss';

export const SearchBooks = () => {
  const intl = useIntl();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [smallBackground, setSmallBackground] = useState(false);

  const shrinkBackground = (shrink: boolean) => {
    setSmallBackground(shrink);
  };

  return (
    <>
      <SEO title={intl.formatMessage(texts.seo)} />
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.background, {
            [styles.smallBackground]: smallBackground
          })}
        />
        <Container className={styles.container}>
          {searchTerm && (
            <div className={styles.titleBox}>
              <Truncate
                truncateText="..."
                line={2}
                text={`${intl.formatMessage(texts.title)} ${searchTerm}`}
                containerClassName={styles.title}
              />
            </div>
          )}
          <SearchBarSticky defaultValue={searchTerm || undefined} size="lg" />
          <SearchResults
            shrinkBackground={shrinkBackground}
            noResultsText={intl.formatMessage(texts.noResults)}
            path={Paths.SEARCH_RESULTS}
          />
        </Container>
      </div>
    </>
  );
};

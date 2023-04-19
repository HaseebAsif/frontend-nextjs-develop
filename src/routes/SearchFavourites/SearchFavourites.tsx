import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { Container } from 'components/ui/general';
import { SearchBarSticky } from 'components/ui/webApp/SearchBarSticky';
import { SearchResults } from 'components/ui/webApp/SearchResults';
import { Paths } from 'consts/router';

import { texts } from './SearchFavourites.texts';

import styles from './SearchFavourites.module.scss';

export const SearchFavourites = () => {
  const intl = useIntl();
  const [smallBackground, setSmallBackground] = useState(false);

  const shrinkBackground = useCallback(
    (shrink: boolean) => {
      setSmallBackground(shrink);
    },
    [setSmallBackground]
  );

  return (
    <>
      <SEO title={intl.formatMessage(texts.seo)} />
      <div
        className={classNames(styles.background, {
          [styles.smallBackground]: smallBackground
        })}
      />
      <Container className={styles.container}>
        <h5 className={styles.title}>{intl.formatMessage(texts.title)}</h5>
        <SearchBarSticky
          path={Paths.SEARCH_FAVOURITES}
          placeholder={intl.formatMessage(texts.searchPlaceholder)}
        />
        <SearchResults
          favourite
          shrinkBackground={shrinkBackground}
          noResultsText={intl.formatMessage(texts.noResults)}
          path={Paths.SEARCH_FAVOURITES}
        />
      </Container>
    </>
  );
};

import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { ScrollToTop } from 'components/tools';
import { Button, Grid, Gutter, Loading } from 'components/ui/general';
import { BookItem } from 'components/ui/webApp/BookItem';
import BookItemHovered from 'components/ui/webApp/BookItemHovered';
import BooksSorting from 'components/ui/webApp/BooksSorting';
import NoSubscriptionModal from 'components/ui/webApp/NoSubscriptionModal';
import Pagination from 'components/ui/webApp/Pagination';
import { BookQuery } from 'consts/books';
import { SearchResultsSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useBreakpoint, useUrlQuery } from 'hooks';
import { useBooksLazyQuery, Book, Subject } from 'types/graphql';
import { isTouchDevice } from 'utils';

import { texts } from './SearchResults.texts';

import styles from './SearchResults.module.scss';

interface SearchResultsRouteProps {
  searchTerm?: string;
  sorting?: string;
  page?: number;
  subject?: Subject;
}

interface SearchResultsProps {
  favourite?: boolean | null;
  lastRead?: boolean | null;
  shrinkBackground: (shrink: boolean) => void;
  noResultsText: string;
  subject?: Subject;
  path: ({
    searchTerm,
    sorting,
    page,
    subject
  }: SearchResultsRouteProps) => string;
}

export const SearchResults: FC<SearchResultsProps> = ({
  favourite = null,
  lastRead = null,
  shrinkBackground,
  noResultsText,
  path,
  subject
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  const queryParams = useUrlQuery();
  const searchTerm = queryParams.get('searchTerm') || undefined;
  const { min } = useBreakpoint();
  const sorting = queryParams.get('sorting') || undefined;
  const pageFromParam = Number(queryParams.get('page'));

  const page = pageFromParam || 1;
  const router = useRouter();
  const [hover, setHover] = useState<string | number | null>(null);
  const sortOrder = useMemo(() => {
    if (!lastRead && sorting) {
      if (sorting === BookQuery.RELEASE_YEAR) {
        return { sorting: [{ field: sorting, direction: 'desc' }] };
      }
      return { sorting: [{ field: sorting, direction: 'asc' }] };
    }
    return undefined;
  }, [lastRead, sorting]);

  const showModal = () => {
    setIsOpen(true);
  };

  const getLimit = useCallback(() => {
    if (min('lg') && !lastRead) return 24;
    if (min('sm') && !lastRead) return 20;
    return 12;
  }, [lastRead, min]);

  const onPageChange = useCallback(
    (targetPageNumber) => {
      if (path({}) === Paths.BOOKS()) {
        return router.push(
          path({ sorting, page: targetPageNumber, subject: subject as Subject })
        );
      }
      return router.push(path({ searchTerm, sorting, page: targetPageNumber }));
    },
    [router, path, searchTerm, sorting, subject]
  );

  const [
    getBooks,
    {
      data: {
        books: {
          edges = [],
          meta: { total = 0, limit = 0, offset = 0 } = {}
        } = {}
      } = {},
      loading
    }
  ] = useBooksLazyQuery();

  ScrollToTop();

  useEffect(() => {
    getBooks({
      variables: {
        filter: {
          limit: getLimit(),
          offset: (page - 1) * getLimit(),
          searchTerm,
          favourite,
          lastRead,
          subjects: subject ? ([subject] as Subject[]) : undefined
        },
        sorting: sortOrder
      }
    });
  }, [
    searchTerm,
    getLimit,
    favourite,
    lastRead,
    sortOrder,
    page,
    getBooks,
    subject
  ]);

  useEffect(() => {
    shrinkBackground(!edges.length);
  }, [edges, shrinkBackground]);

  const nrOfResultsShowing = useMemo(() => {
    return `${intl.formatMessage(texts.showsLabel)} ${offset + 1}-${
      offset + limit > total ? total : offset + limit
    } ${intl.formatMessage(texts.ofLabel)} ${total} ${intl.formatMessage(
      texts.resultLabel
    )}`;
  }, [intl, limit, offset, total]);

  return (
    <div>
      {loading && <Loading />}
      {!!edges.length && (
        <Grid space="between" className={styles.resultsSortingBar}>
          <Grid.Item className={styles.totalResults}>
            {!favourite && !lastRead && <span>{nrOfResultsShowing}</span>}
          </Grid.Item>
          <Grid.Item>
            {!lastRead && <BooksSorting path={path} subject={subject} />}
          </Grid.Item>
        </Grid>
      )}
      <Grid
        gutter={{ left: { root: 2, sm: 4, lg: 5 }, bottom: 5 }}
        data-cy={SearchResultsSelectors.BOOKS}
        className={styles.resultSection}
      >
        {edges.map((edge) => {
          const book = edge as Book;
          return (
            <Grid.Item
              key={book.id}
              width={{ root: 6, sm: 3, lg: 2 }}
              data-cy={SearchResultsSelectors.BOOK_ITEM}
            >
              <div
                className={styles.bookItem}
                onMouseEnter={() => setHover(book.id)}
                onMouseLeave={() => setHover(null)}
              >
                {!isTouchDevice() && hover === book.id ? (
                  <BookItemHovered book={book} showModal={showModal} />
                ) : (
                  <BookItem book={book} searchResultItem />
                )}
              </div>
            </Grid.Item>
          );
        })}
        {!edges.length && !loading && (
          <Grid.Item>
            <Gutter gutter={{ bottom: 4 }}>
              <Gutter.Item className={styles.noResults}>
                <span>{noResultsText}</span>
              </Gutter.Item>
              <Gutter.Item>
                <Button
                  size="md"
                  rounded={false}
                  fullWidth={!min('sm')}
                  href={Paths.REQUEST_BOOK}
                >
                  {intl.formatMessage(texts.requestBook)}
                </Button>
              </Gutter.Item>
            </Gutter>
          </Grid.Item>
        )}
      </Grid>

      {!lastRead && !!edges.length && (
        <Grid
          space={min('sm') ? 'between' : undefined}
          reverse={min('sm')}
          gutter={{ bottom: { root: 5, sm: 0 } }}
        >
          <Grid.Item width={!min('sm') ? 12 : undefined}>
            <Pagination
              currentPage={page}
              changePage={onPageChange}
              limit={limit}
              total={total}
            />
          </Grid.Item>
          <Grid.Item width={!min('sm') ? 12 : undefined}>
            <Button
              size="md"
              rounded={false}
              fullWidth={!min('sm')}
              color="alpha93"
              href={Paths.REQUEST_BOOK}
            >
              {intl.formatMessage(texts.requestBook)}
            </Button>
          </Grid.Item>
        </Grid>
      )}
      <NoSubscriptionModal onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
};

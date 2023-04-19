import React, { FC, useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { SelectNative } from 'components/ui/forms';
import { BookQuery } from 'consts/books';
import { useBreakpoint, useUrlQuery } from 'hooks';
import { Subject } from 'types/graphql';

import { texts } from './BooksSorting.texts';

import styles from './BooksSorting.module.scss';

interface SearchResultsRouteProps {
  searchTerm?: string;
  sorting?: string;
  page?: number;
  subject?: Subject;
}

interface BooksSortingProps {
  path: ({
    searchTerm,
    sorting,
    page,
    subject
  }: SearchResultsRouteProps) => string;
  subject?: Subject;
}
// only use path OR booksPath
const BooksSorting: FC<BooksSortingProps> = ({ path, subject }) => {
  const intl = useIntl();
  const { register } = useForm();
  const queryParams = useUrlQuery();
  const sorting = queryParams.get('sorting') || undefined;
  const router = useRouter();
  const { min } = useBreakpoint();

  const searchTerm = queryParams.get('searchTerm') || undefined;

  const onChange = useCallback(
    ({ target }) => {
      if (path) {
        return router.push(
          path({
            searchTerm,
            sorting: target.value,
            subject: subject || undefined
          })
        );
      }
    },
    [router, path, searchTerm, subject]
  );
  const sortingOptions = useMemo(() => {
    return [
      {
        value: BookQuery.TITLE,
        label: intl.formatMessage(texts.sortingTitles)
      },
      {
        value: BookQuery.AUTHORNAMES,
        label: intl.formatMessage(texts.sortingAuthors)
      },
      {
        value: BookQuery.RELEASE_YEAR,
        label: intl.formatMessage(texts.lastPublished)
      }
    ];
  }, [intl]);

  const defaultSortingValue = useMemo(() => {
    return (
      sortingOptions.find(({ value }) => value === sorting)?.value ||
      BookQuery.TITLE
    );
  }, [sorting, sortingOptions]);

  return (
    <div className={styles.root}>
      {min('sm') && (
        <span className={styles.sortingLabel}>
          {intl.formatMessage(texts.placeholder)}
        </span>
      )}
      <SelectNative
        name="sorting"
        register={register}
        options={sortingOptions}
        onChange={onChange}
        defaultValue={defaultSortingValue}
        fullWidth
        className={styles.select}
        color="transparent"
      />
    </div>
  );
};

export default BooksSorting;

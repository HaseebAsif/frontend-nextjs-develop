import React, { FC, useRef } from 'react';

import classNames from 'classnames';

import { SearchBooksField } from 'components/ui/webApp/SearchBooksField';
import { SearchBarStickySelectors } from 'consts/cypress';
import { useScroll } from 'hooks';

import styles from './SearchBarSticky.module.scss';

interface SearchResultsRouteProps {
  searchTerm?: string;
  sorting?: string;
  page?: number;
}

interface SearchBarStickyProps {
  defaultValue?: string;
  path?: ({ searchTerm, sorting, page }?: SearchResultsRouteProps) => string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SearchBarSticky: FC<SearchBarStickyProps> = ({
  defaultValue,
  placeholder,
  path,
  size
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // eslint-disable-next-line no-empty-pattern
  const {} = useScroll({
    element: window,
    wait: 100
  });

  const elementPosition = ref?.current?.getBoundingClientRect();

  return (
    <div
      className={classNames(styles.searchBar, {
        [styles.changeSearchBar]: elementPosition && elementPosition.y <= 80
      })}
      data-cy={SearchBarStickySelectors.SEARCH_FIELD}
      ref={ref}
    >
      <div
        className={classNames({
          [styles.wrapper]: elementPosition && elementPosition.y <= 80
        })}
      >
        <SearchBooksField
          defaultValue={defaultValue}
          path={path}
          size={size}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

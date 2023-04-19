import React, { FC, Fragment, useCallback } from 'react';

import { useIntl } from 'react-intl';

import { ScrollToTop } from 'components/tools';
import { Button } from 'components/ui/general';
import { useBreakpoint } from 'hooks';

import { texts } from './Pagination.text';

import styles from './Pagination.module.scss';

interface PaginationProps {
  changePage: (change: number) => void;
  currentPage: number;
  limit: number;
  total: number;
}

const Pagination: FC<PaginationProps> = ({
  changePage,
  currentPage,
  limit,
  total
}) => {
  const { min } = useBreakpoint();
  const intl = useIntl();
  const totalPages = Math.ceil(total / limit);
  const renderPageButton = useCallback(() => {
    const pageArray =
      total && limit ? Array.from(Array(Math.ceil(total / limit)).keys()) : [];

    return pageArray.map((targetIndex) => {
      const index = targetIndex + 1;

      switch (true) {
        case index === currentPage: {
          return (
            <Button
              key={index}
              disabled
              size="md"
              rounded={false}
              className={styles.pageButton}
              stripPadding
              color="alpha93"
            >
              {index}
            </Button>
          );
        }
        case index === totalPages:
        case index === 1:
        case index === currentPage + 1:
        case index === currentPage - 1:
        case index === currentPage - 2:
        case index === currentPage + 2: {
          return (
            <Button
              key={index}
              rounded={false}
              onClick={() => changePage(index)}
              naked
              size="md"
              className={styles.pageButton}
              stripPadding
            >
              {index}
            </Button>
          );
        }
        case index === currentPage - 3 && currentPage - 3 !== 1: {
          return (
            <Button
              key={index}
              rounded={false}
              disabled
              naked
              size="md"
              className={styles.pageButton}
              stripPadding
            >
              ...
            </Button>
          );
        }
        case index === currentPage + 3 && currentPage + 3 !== totalPages: {
          return (
            <Button
              key={index}
              rounded={false}
              naked
              size="md"
              className={styles.pageButton}
              stripPadding
            >
              ...
            </Button>
          );
        }
        default:
          return <Fragment key={index} />;
      }
    });
  }, [changePage, currentPage, limit, total, totalPages]);

  ScrollToTop();

  return (
    <div className={styles.pagination}>
      <Button
        key="paginationPrevButton"
        rounded={false}
        naked
        className={styles.prevButton}
        disabled={currentPage === 1}
        type="button"
        onClick={() => changePage(currentPage - 1)}
        iconLeft={{ name: 'angle-left' }}
        stripPadding
      >
        {min('lg') && intl.formatMessage(texts.previousPage)}
      </Button>
      {renderPageButton()}
      <Button
        key="paginationNextButton"
        rounded={false}
        naked
        className={styles.nextButton}
        disabled={currentPage === totalPages}
        type="button"
        onClick={() => changePage(currentPage + 1)}
        iconRight={{ name: 'angle-right' }}
        stripPadding
      >
        {min('lg') && intl.formatMessage(texts.nextPage)}
      </Button>
    </div>
  );
};

export default Pagination;

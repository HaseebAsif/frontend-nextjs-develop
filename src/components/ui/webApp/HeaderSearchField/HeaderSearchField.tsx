import React, { FC, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { Button, Icon } from 'components/ui/general';
import { SearchBooksField } from 'components/ui/webApp/SearchBooksField';
import { HeaderSelectors } from 'consts/cypress';
import { useKeyPress } from 'hooks';

import { texts } from './HeaderSearchField.text';

import styles from './HeaderSearchField.module.scss';

interface HeaderSearchFieldProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const HeaderSearchField: FC<HeaderSearchFieldProps> = ({
  isVisible,
  setIsVisible
}) => {
  const intl = useIntl();
  const router = useRouter();
  const currentLocation = router.pathname;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  useKeyPress(27, () => {
    if (isVisible) setIsVisible(false);
  });

  const callback = useCallback(() => {
    if (inputRef.current && isVisible) {
      inputRef.current?.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    searchRef.current?.addEventListener('transitionend', callback);
  }, [callback]);

  return (
    <>
      <Button
        stripPadding
        onClick={() => setIsVisible(!isVisible)}
        naked
        iconLeft={{ name: 'search' }}
      />
      <div className={styles.searchBarWrapper}>
        <div
          className={classNames(styles.searchBar, {
            [styles.visible]: isVisible
          })}
          ref={searchRef}
        >
          <div className={styles.wrapper}>
            <div
              className={styles.search}
              data-cy={HeaderSelectors.SEARCH_FIELD}
            >
              <SearchBooksField
                defaultValue=""
                placeholder={intl.formatMessage(texts.searchPlaceholder)}
                inputRef={inputRef}
                size="xl"
                icon={null}
              />
            </div>
            <div className={styles.closeButtonWrapper}>
              <Button
                onClick={() => {
                  inputRef.current!.value = '';
                  inputRef.current?.focus();
                }}
                naked
                stripPadding
              >
                <Icon name="times" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

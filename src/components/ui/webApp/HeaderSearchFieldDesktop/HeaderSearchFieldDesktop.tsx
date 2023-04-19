import React, { useState } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { Text } from 'components/ui/forms';
import { Button, Icon } from 'components/ui/general';
import { HeaderSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';

import { texts } from './HeaderSearchFieldDesktop.text';

import styles from './HeaderSearchFieldDesktop.module.scss';

interface HeaderSearchFieldDesktopProps {
  color: 'alpha93' | 'light';
}

export const HeaderSearchFieldDesktop = ({
  color
}: HeaderSearchFieldDesktopProps) => {
  const intl = useIntl();
  const [searchFieldIsVisible, setSearchFieldisVisible] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(({ search }) => {
    reset();
    setSearchFieldisVisible(false);
    router.push(
      Paths.SEARCH_RESULTS({ searchTerm: encodeURIComponent(search) })
    );
  });

  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles[`${color}Color`]]: searchFieldIsVisible
      })}
      data-cy={HeaderSelectors.SEARCH_FIELD_DESKTOP}
    >
      <div data-cy={HeaderSelectors.SEARCH_ICON}>
        <Button
          stripPadding
          naked
          onClick={() => setSearchFieldisVisible(true)}
        >
          <Icon name="search" />
        </Button>
      </div>

      {searchFieldIsVisible && (
        <>
          <form onSubmit={onSubmit}>
            <Text
              rounded
              borderless
              type="text"
              name="search"
              color={color}
              size="md"
              register={register}
              placeholder={intl.formatMessage(texts.searchFieldPlaceholder)}
              className={styles.test}
            />
          </form>
          <Button
            stripPadding
            naked
            onClick={() => setSearchFieldisVisible(false)}
          >
            <Icon name="times" />
          </Button>
        </>
      )}
    </div>
  );
};

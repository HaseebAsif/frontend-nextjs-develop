import React from 'react';

import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { BooksquareLogoIconWhite } from 'assets/icons';
import { Link } from 'components/tools';
import { Icon, Button } from 'components/ui/general';
import { MenuSelectors } from 'consts/cypress';
import { BackofficePaths } from 'consts/router';
import { useUser } from 'hooks';
import { logoutStart } from 'redux/auth';

import { texts } from './Menu.texts';

import styles from './Menu.module.scss';

export const Menu = () => {
  const { user } = useUser();
  const intl = useIntl();
  const name = `${user?.firstName} ${user?.lastName}`;
  const role = user?.role
    ? user?.role.charAt(0).toUpperCase() + user?.role.slice(1)
    : '';
  const dispatch = useDispatch();

  return (
    <div className={styles.menuSection}>
      <div className={styles.logo}>
        <BooksquareLogoIconWhite />
      </div>
      <fieldset className={styles.line} />
      <span className={styles.user}>{name}</span>
      <span className={styles.role}>{role}</span>
      <fieldset className={styles.line} />
      <Link
        href={BackofficePaths.BACKOFFICE_STATISTICS_BOOKS}
        className={styles.menuOption}
        activeClassName={styles.activeLink}
        data-cy={MenuSelectors.BOOKS_STATISTICS_LINK}
      >
        <Icon name="books" className={styles.icon} />
        <span>{intl.formatMessage(texts.menuOptionStatistics)}</span>
      </Link>
      <Link
        href={BackofficePaths.BACKOFFICE_BOOKS()}
        className={styles.menuOption}
        activeClassName={styles.activeLink}
        data-cy={MenuSelectors.BOOKS_LINK}
      >
        <Icon name="books" className={styles.icon} />
        <span>{intl.formatMessage(texts.menuOptionBooks)}</span>
      </Link>
      <Link
        href={BackofficePaths.BACKOFFICE_MISSED_SEARCHES}
        className={styles.menuOption}
        activeClassName={styles.activeLink}
        data-cy={MenuSelectors.MISSED_SEARCHES_LINK}
      >
        <Icon name="search" className={styles.icon} />
        <span>{intl.formatMessage(texts.menuOptionSearches)}</span>
      </Link>
      <Link
        href={BackofficePaths.BACKOFFICE_USERS}
        className={styles.menuOption}
        activeClassName={styles.activeLink}
        data-cy={MenuSelectors.USERS_LINK}
      >
        <Icon name="building" className={styles.icon} />
        <span>{intl.formatMessage(texts.menuOptionTwo)}</span>
      </Link>
      <fieldset className={styles.line} />
      <div className={styles.menuOption}>
        <Icon name="cog" className={styles.icon} />
        <span>{intl.formatMessage(texts.menuOptionThree)}</span>
      </div>
      <div className={styles.menuOption} data-cy={MenuSelectors.LOGOUT_BUTTON}>
        <Button
          stripPadding
          className={styles.logoutButton}
          iconLeft={{ name: 'sign-out' }}
          onClick={() => dispatch(logoutStart())}
          naked
        >
          <span>{intl.formatMessage(texts.menuOptionFour)}</span>
        </Button>
      </div>
    </div>
  );
};

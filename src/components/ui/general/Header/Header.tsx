/* eslint-disable @calm/react-intl/missing-formatted-message */
import React, { useCallback, useMemo, useState } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { BooksquareLogoIcon } from 'assets/icons';
import { Link } from 'components/tools';
import { Button, Container, Grid } from 'components/ui/general';
import { BurgerMenu } from 'components/ui/webApp/BurgerMenu';
import { ExploreMenuDesktop } from 'components/ui/webApp/ExploreMenu/';
import { HeaderSearchField } from 'components/ui/webApp/HeaderSearchField';
import { HeaderSearchFieldDesktop } from 'components/ui/webApp/HeaderSearchFieldDesktop';
import { UserMenu } from 'components/ui/webApp/UserMenu';
import { HeaderSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useBreakpoint, useScroll, useUrlQuery, useUser } from 'hooks';
import { useSubjectsQuery } from 'types/graphql';
import { getSubjectTuples } from 'utils';

import { texts } from './Header.texts';

import styles from './Header.module.scss';

export const Header = () => {
  const intl = useIntl();
  const router = useRouter();
  const { min } = useBreakpoint();
  const params = useUrlQuery();
  const redirect = params.get('redirect') || '';
  const { loggedIn } = useUser();
  const [searchBarMobileIsVisible, setSearchBarMobileIsVisible] =
    useState(false);
  const [exploreMenuIsVisible, setExploreMenuIsVisible] = useState(false);
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const updateBurgerMenuState = useCallback((stateValue: boolean) => {
    setBurgerMenuIsOpen(stateValue);
  }, []);

  const updateExploreMenuState = useCallback((stateValue: boolean) => {
    setExploreMenuIsVisible(stateValue);
  }, []);

  const { data: subjectData } = useSubjectsQuery();

  const subjectArray = useMemo(
    () =>
      subjectData?.subjects ? getSubjectTuples(subjectData?.subjects) : [],
    [subjectData]
  );

  const { y } = useScroll({
    wait: 100,
    element: window
  });

  const isDesktop = min('md');
  const isScrollTheme = y || searchBarMobileIsVisible;

  return (
    <header
      className={classNames(styles.root, {
        [styles.headerShadow]: isScrollTheme || exploreMenuIsVisible
      })}
    >
      <Container fullWidth className={styles.container}>
        {exploreMenuIsVisible && isDesktop && (
          <ExploreMenuDesktop
            updateExploreMenuState={updateExploreMenuState}
            subjectArray={subjectArray}
          />
        )}
        <Grid space="between" align="middle">
          <Grid.Item>
            <Link
              href={Paths.HOME}
              data-cy={HeaderSelectors.HOME_BUTTON}
              className={styles.logo}
            >
              <BooksquareLogoIcon />
            </Link>
          </Grid.Item>
          <Grid.Item>
            {isDesktop && (
              <Grid gutter={{ left: 2 }} align="middle">
                {loggedIn && (
                  <Grid.Item data-cy={HeaderSelectors.REFERRAL_BUTTON}>
                    <Button
                      size="md"
                      onClick={() => router.push(Paths.REFERRAL)}
                    >
                      {intl.formatMessage(texts.referral)}
                    </Button>
                  </Grid.Item>
                )}
                <Grid.Item>
                  <HeaderSearchFieldDesktop
                    color={isScrollTheme ? 'light' : 'alpha93'}
                  />
                </Grid.Item>

                <Grid.Item>
                  <Button
                    className={styles.utforska}
                    size="md"
                    color="secondary"
                    naked
                    onClick={() =>
                      setExploreMenuIsVisible(!exploreMenuIsVisible)
                    }
                  >
                    {intl.formatMessage(texts.explore)}
                  </Button>
                </Grid.Item>
                {loggedIn && (
                  <Grid.Item data-cy={HeaderSelectors.FAVOURITE_BUTTON}>
                    <Button
                      className={styles.headerLink}
                      size="md"
                      color="secondary"
                      naked
                      onClick={() => router.push(Paths.SEARCH_FAVOURITES())}
                    >
                      {intl.formatMessage(texts.myLibrary)}
                    </Button>
                  </Grid.Item>
                )}
                {loggedIn && (
                  <Grid.Item gutter={{ left: 2 }}>
                    <UserMenu />
                  </Grid.Item>
                )}
                {!loggedIn && (
                  <>
                    <Grid.Item
                      gutter={{ left: 2 }}
                      data-cy={HeaderSelectors.LOGIN_BUTTON}
                    >
                      <Button
                        className={styles.loginButton}
                        rounded={false}
                        size="md"
                        color="secondary"
                        onClick={() => router.push(Paths.LOGIN(redirect))}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 9.99999C12.3012 9.99999 14.1667 8.13451 14.1667 5.83332C14.1667 3.53214 12.3012 1.66666 10 1.66666C7.69882 1.66666 5.83334 3.53214 5.83334 5.83332C5.83334 8.13451 7.69882 9.99999 10 9.99999Z"
                            fill="white"
                          />
                          <path
                            d="M9.99999 12.0833C5.82499 12.0833 2.42499 14.8833 2.42499 18.3333C2.42499 18.5667 2.60832 18.75 2.84165 18.75H17.1583C17.3917 18.75 17.575 18.5667 17.575 18.3333C17.575 14.8833 14.175 12.0833 9.99999 12.0833Z"
                            fill="white"
                          />
                        </svg>
                        <span style={{ marginLeft: '4px' }}>
                          {intl.formatMessage(texts.login)}
                        </span>
                      </Button>
                    </Grid.Item>
                  </>
                )}

                <>
                  <Grid.Item
                    gutter={{ left: 2 }}
                    data-cy={HeaderSelectors.LOGIN_BUTTON}
                  >
                    <Button
                      className={styles.exploreButton}
                      rounded={false}
                      size="md"
                      color="secondary"
                      onClick={() => router.push(Paths.LOGIN(redirect))}
                    >
                      Skapa konto
                    </Button>
                  </Grid.Item>
                </>
              </Grid>
            )}
            {!isDesktop && (
              <Grid gutter={{ left: 4 }}>
                {router.pathname !== Paths.SEARCH_RESULTS() &&
                  !burgerMenuIsOpen && (
                    <Grid.Item>
                      <div data-cy={HeaderSelectors.SEARCH_BUTTON}>
                        <HeaderSearchField
                          isVisible={searchBarMobileIsVisible}
                          setIsVisible={setSearchBarMobileIsVisible}
                        />
                      </div>
                    </Grid.Item>
                  )}
                <Grid.Item>
                  <BurgerMenu
                    burgerMenuIsOpen={burgerMenuIsOpen}
                    updateBurgerMenuState={updateBurgerMenuState}
                    subjectArray={subjectArray}
                  />
                </Grid.Item>
              </Grid>
            )}
          </Grid.Item>
        </Grid>
      </Container>
    </header>
  );
};

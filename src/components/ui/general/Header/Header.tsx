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
                        {intl.formatMessage(texts.login)}
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
                      Explore
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

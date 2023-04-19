import React, { useEffect, useMemo, useRef } from 'react';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Accordion, Button, Icon } from 'components/ui/general';
import { ExploreMenuFooter } from 'components/ui/webApp/BurgerMenuFooter';
import { ExploreMenuMobile } from 'components/ui/webApp/ExploreMenu/';
import { BurgerMenuSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { useUser } from 'hooks';
import { logoutStart } from 'redux/auth';
import { Subject } from 'types/graphql';
import { preventScroll } from 'utils';

import { AccordionContent } from '../../general/Accordion/subComponents';

import { texts } from './BurgerMenu.text';

import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  burgerMenuIsOpen: boolean;
  updateBurgerMenuState: (stateValue: boolean) => void;
  subjectArray: [string, Subject][];
}

export const BurgerMenu = ({
  updateBurgerMenuState,
  burgerMenuIsOpen,
  subjectArray
}: BurgerMenuProps) => {
  const intl = useIntl();
  const { loggedIn } = useUser();
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const currentLocation = router.pathname;

  useEffect(() => {
    updateBurgerMenuState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  useEffect(() => {
    // To prevent having two competing scrollbars and to hide chat widget
    if (!burgerMenuIsOpen && menuRef.current) {
      menuRef.current.scrollTo(0, 0);
    }
    if (burgerMenuIsOpen) {
      (window as any)?.Intercom('update', { hide_default_launcher: true });
      preventScroll(true);
      return () => {
        updateBurgerMenuState(false);
        preventScroll(false);
        (window as any)?.Intercom('update', { hide_default_launcher: false });
      };
    }
  }, [burgerMenuIsOpen, updateBurgerMenuState]);

  const loggedInItems = useMemo(
    () => [
      {
        to: Paths.SEARCH_FAVOURITES(),
        children: intl.formatMessage(texts.linkMyLibrary)
      },
      {
        to: Paths.SETTINGS,
        children: intl.formatMessage(texts.linkSettings)
      }
    ],
    [intl]
  );

  return (
    <div
      className={classNames({
        [styles.menuIsOpen]: burgerMenuIsOpen
      })}
      data-cy={BurgerMenuSelectors.BURGER_MENU}
    >
      <button
        type="button"
        className={styles.toggle}
        onClick={() => updateBurgerMenuState(!burgerMenuIsOpen)}
      >
        <Icon name="bars" className={styles.toggleIconClosed} />
        <Icon name="times" className={styles.toggleIconOpened} />
      </button>
      <div className={styles.menuWrapper}>
        <div
          ref={menuRef}
          className={classNames(styles.menu, {
            [styles.visible]: burgerMenuIsOpen
          })}
        >
          <ul className={styles.menuList}>
            {loggedIn && (
              <li>
                <div>
                  <Accordion>
                    <Accordion.Item
                      id="test"
                      className={styles.exploreMenuItem}
                    >
                      <Accordion.Label className={styles.iconStyle}>
                        {intl.formatMessage(texts.exploreMenu)}
                      </Accordion.Label>
                      <AccordionContent>
                        <ExploreMenuMobile
                          subjectArray={subjectArray}
                          burgerMenuIsOpen={burgerMenuIsOpen}
                          updateBurgerMenuState={updateBurgerMenuState}
                        />
                      </AccordionContent>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </li>
            )}
            {!loggedIn && (
              <>
                <li className={styles.exploreMenuTitleLoggedOut}>
                  {intl.formatMessage(texts.exploreMenu)}
                </li>
                <li className={styles.exploreMenuLoggedOut}>
                  <ExploreMenuMobile
                    subjectArray={subjectArray}
                    burgerMenuIsOpen={burgerMenuIsOpen}
                    updateBurgerMenuState={updateBurgerMenuState}
                  />
                </li>
              </>
            )}
            {loggedIn && (
              <li className={styles.menuLink}>
                <Button size="md" onClick={() => router.push(Paths.REFERRAL)}>
                  {intl.formatMessage(texts.referral)}
                </Button>
              </li>
            )}
            {loggedIn &&
              loggedInItems.map(({ to, children }) => (
                <li key={to} className={styles.menuLink}>
                  <Link href={to} onClick={() => updateBurgerMenuState(false)}>
                    {children}
                  </Link>
                </li>
              ))}
            {loggedIn && (
              <li>
                <div data-cy={BurgerMenuSelectors.LOGOUT_BUTTON}>
                  <Button
                    className={styles.logoutButton}
                    rounded={false}
                    type="button"
                    size="md"
                    naked
                    onClick={() => {
                      dispatch(logoutStart());
                      updateBurgerMenuState(false);
                    }}
                    stripPadding
                  >
                    {intl.formatMessage(texts.logoutButton)}
                  </Button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {burgerMenuIsOpen && !loggedIn && <ExploreMenuFooter />}
    </div>
  );
};

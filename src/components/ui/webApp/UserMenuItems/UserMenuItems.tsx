import React, { useContext, useEffect, useMemo, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { Button } from 'components/ui/general';
import { UserMenuSelectors } from 'consts/cypress';
import { Paths } from 'consts/router';
import { AccordionContext } from 'context/accordion';
import { logoutStart } from 'redux/auth';

import { texts } from './UserMenuItems.texts';

import styles from './UserMenuItems.module.scss';

const UserMenuItems = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [, setActiveItems] = useContext(AccordionContext);
  const testRef = useRef<HTMLDivElement | null>(null) as any;

  const router = useRouter();

  const currentLocation = router.pathname;

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setActiveItems([]);
  }, [currentLocation, setActiveItems]);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (testRef.current && !testRef.current.contains(e?.target)) {
        setActiveItems([]);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [setActiveItems]);

  const loggedInItems = useMemo(
    () => [
      {
        to: Paths.SETTINGS,
        children: intl.formatMessage(texts.linkSettings)
      }
    ],
    [intl]
  );

  return (
    <div ref={testRef}>
      {loggedInItems.map(({ to, children }) => (
        <Link href={to} key={to} className={styles.menuLink}>
          {children}
        </Link>
      ))}
      <div data-cy={UserMenuSelectors.LOGOUT_BUTTON}>
        <Button
          className={styles.logoutButton}
          rounded={false}
          type="button"
          color="alpha93"
          fullWidth
          onClick={() => dispatch(logoutStart())}
        >
          {intl.formatMessage(texts.logoutButton)}
        </Button>
      </div>
    </div>
  );
};

export default UserMenuItems;

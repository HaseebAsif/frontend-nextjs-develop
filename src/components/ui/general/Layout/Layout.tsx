import React, { ReactNode, useContext, useEffect } from 'react';

import { setUser as setUserSentry } from '@sentry/nextjs';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Wrapper } from 'components/ui/backoffice/Wrapper/Wrapper';
import { Header, Footer } from 'components/ui/general';
import GdprConsent from 'components/ui/modals/GdprConsent';
import { Consents } from 'consts/gdpr';
import { BackofficePaths, Paths, Prefixes } from 'consts/router';
import { BackgroundContext } from 'context/background';
import { usePrevious, useTabAccess, useUser } from 'hooks';
import { selectConsent } from 'redux/gdpr';
import { tracker } from 'utils';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useTabAccess();

  const { user, loggedIn } = useUser();
  const router = useRouter();
  const isBackoffice = router.pathname.split('/')[1] === Prefixes.BACKOFFICE;
  const [color] = useContext(BackgroundContext);
  const consent = useSelector(selectConsent);

  const prevLoggedInRef = usePrevious(loggedIn);

  useEffect(() => {
    if (consent.includes(Consents.All)) {
      setUserSentry(
        user
          ? {
              id: String(user.id),
              email: user.email
            }
          : null
      );
    }
    if (user) tracker.identify(user);
  }, [user, consent]);

  useEffect(() => {
    if (
      !loggedIn &&
      prevLoggedInRef &&
      !router.pathname.includes(Prefixes.BACKOFFICE)
    ) {
      router.replace(Paths.HOME);
    }
  }, [router, loggedIn, prevLoggedInRef, user]);

  const getBackgroundColor = () => {
    switch (color) {
      case 'light':
        return styles.backgroundLight;
      case 'beta':
        return styles.backgroundBeta;
      case 'delta':
        return styles.backgroundDelta;
      default:
        return styles.backgroundLight;
    }
  };

  if (isBackoffice) {
    return <Wrapper>{children}</Wrapper>;
  }

  return (
    <div className={classNames(styles.root, getBackgroundColor())}>
      <Header />
      <div className={styles.content}>{children}</div>
      {!router.pathname.includes(BackofficePaths.BACKOFFICE_LOGIN) &&
        !router.pathname.includes(Paths.READER()) && <Footer />}
      <GdprConsent />
    </div>
  );
};

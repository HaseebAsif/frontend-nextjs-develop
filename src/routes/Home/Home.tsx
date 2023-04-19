import React, { useContext, useEffect } from 'react';

import { useIntl } from 'react-intl';

import { SEO } from 'components/tools';
import { LandingLoggedIn } from 'components/ui/webApp/LandingLoggedIn';
import { LandingLoggedOut } from 'components/ui/webApp/LandingLoggedOut';
import { BackgroundContext } from 'context/background';
import { useUser } from 'hooks';

import { texts } from './Home.text';

import styles from './Home.module.scss';

export const Home = () => {
  const { formatMessage } = useIntl();
  const { loggedIn } = useUser();
  const [, setBackgroundcolor] = useContext(BackgroundContext);

  useEffect(() => {
    if (loggedIn) {
      setBackgroundcolor('beta');
    }
    return () => {
      setBackgroundcolor(undefined);
    };
  }, [loggedIn, setBackgroundcolor]);

  return (
    <div className={styles.root}>
      <SEO
        title={formatMessage(texts.seoTitle)}
        description={formatMessage(texts.metaDescriptionContent)}
      />
      {loggedIn ? <LandingLoggedIn /> : <LandingLoggedOut />}
    </div>
  );
};

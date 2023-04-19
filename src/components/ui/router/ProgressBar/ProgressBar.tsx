import { useCallback, useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';

import styles from './ProgressBar.module.scss';

export const ProgressBar = () => {
  const routeChangeStart = useCallback(() => {
    NProgress.set(0);
    NProgress.start();
  }, []);

  const routeChangeEnd = useCallback(() => {
    NProgress.done(true);
  }, []);

  useEffect(() => {
    NProgress.configure({
      template: `<div class=${styles.bar} role="bar"></div>`,
      showSpinner: false
    });

    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, [routeChangeEnd, routeChangeStart]);

  return null;
};

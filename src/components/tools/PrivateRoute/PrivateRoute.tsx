import React, { ReactNode, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { BackofficePaths, Paths, Prefixes } from 'consts/router';
import { SubscriptionStatus } from 'consts/subscription';
import { useUser } from 'hooks';
import { addToast } from 'redux/toast';
import { UserRole } from 'types/graphql';

import { texts } from './PrivateRoute.text';

interface PrivateRouteProps {
  allowedRoles?: UserRole[];
  requiresSubscription?: Boolean;
  children: ReactNode;
}

export const PrivateRoute = ({
  allowedRoles,
  requiresSubscription,
  children
}: PrivateRouteProps) => {
  const { loggedIn, user, isNotAllowed } = useUser({ allowedRoles });
  const dispatch = useDispatch();
  const intl = useIntl();
  const router = useRouter();

  useEffect(() => {
    if (isNotAllowed) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.notAllowed),
          type: 'light'
        })
      );
    }
  }, [dispatch, intl, isNotAllowed]);

  if (!loggedIn || !user) {
    if (router.pathname.includes(Prefixes.BACKOFFICE)) {
      router.replace(BackofficePaths.BACKOFFICE_LOGIN);
    }

    router.replace(Paths.LOGIN());
  }

  if (isNotAllowed) {
    router.replace(Paths.HOME);
    return null;
  }

  if (requiresSubscription) {
    if (
      user?.role !== UserRole.Admin &&
      (user?.subscription == null ||
        !(
          user.subscription.status === SubscriptionStatus.ACTIVE ||
          user.subscription.status === SubscriptionStatus.TRIAL
        ))
    ) {
      if (user) {
        router.replace(Paths.SETTINGS);
      }

      router.replace(Paths.REGISTER());
    }
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

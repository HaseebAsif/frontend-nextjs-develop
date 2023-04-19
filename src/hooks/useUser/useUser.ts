import { useSelector } from 'react-redux';

import {
  getUser,
  getToken,
  getLoggedIn,
  getError,
  getLoading,
  getRole,
  AuthRootState,
  getIsNewAccount
} from 'redux/auth';
import { UserRole } from 'types/graphql';

interface UseUser {
  allowedRoles?: UserRole[];
}

export const useUser = ({ allowedRoles }: UseUser = {}): {
  user?: AuthRootState['auth']['user'];
  token?: AuthRootState['auth']['token'];
  loggedIn: boolean;
  role?: UserRole;
  newAccount?: AuthRootState['auth']['newAccount'];
  error: AuthRootState['auth']['error'];
  loading: AuthRootState['auth']['loading'];
  isNotAllowed?: boolean;
} => {
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const loggedIn = useSelector(getLoggedIn);
  const role = useSelector(getRole);
  const newAccount = useSelector(getIsNewAccount);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  const isNotAllowed =
    !!allowedRoles?.length && role && !allowedRoles.includes(role);

  return {
    user,
    token,
    loggedIn,
    role,
    error,
    loading,
    isNotAllowed,
    newAccount
  };
};

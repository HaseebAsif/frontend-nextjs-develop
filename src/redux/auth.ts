import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, takeUntil, mapTo } from 'rxjs/operators';

import { apolloClient as client } from 'api/apollo';
import { RootState } from 'redux/reducers';
import { setLocation } from 'redux/router';
import {
  LoginEmailDocument,
  MutationLoginEmailArgs,
  User
} from 'types/graphql';

interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthState {
  token?: string | null;
  refreshToken?: string | null;
  user?: User | null;
  loading: boolean;
  error: boolean;
  newAccount?: boolean;
  signupReason: boolean;
}

export interface AuthRootState {
  auth: AuthState;
}

// Selectors
export const getUser = ({ auth }: AuthRootState) => auth.user;
export const getRole = ({ auth }: AuthRootState) => auth.user?.role;
export const getIsNewAccount = ({ auth }: AuthRootState) => auth.newAccount;
export const getToken = ({ auth }: AuthRootState) => auth.token;
export const getError = ({ auth }: AuthRootState) => auth.error;
export const getLoggedIn = ({ auth }: AuthRootState) => !!auth.token;
export const getLoggedOut = ({ auth }: AuthRootState) => !!auth.token;
export const getLoading = ({ auth }: AuthRootState) => auth.loading;
export const getRefreshToken = ({ auth }: AuthRootState) => auth.refreshToken;
export const getHasSignupReason = ({ auth }: AuthRootState) =>
  auth?.signupReason;

// Reducers
const initialState: AuthState = {
  token: null,
  refreshToken: null,
  user: null,
  loading: false,
  error: false,
  newAccount: false,
  signupReason: true
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state, action: PayloadAction<MutationLoginEmailArgs>) => {
      state.token = null;
      state.user = null;
      state.loading = true;
      state.error = false;
      state.newAccount = false;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
        user: User;
        newAccount?: boolean;
      }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.refreshToken = action.payload.refreshToken;
      state.loading = false;
      state.error = false;
      state.newAccount = action.payload.newAccount;
      state.signupReason = action.payload.user.signupReason;
    },
    loginError: (state) => {
      state.token = null;
      state.user = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = true;
      state.newAccount = false;
    },
    logoutStart: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = false;
      state.newAccount = false;
      state.signupReason = true;
    },
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    setToken: (
      state,
      action: PayloadAction<{ token: string; refreshToken: string }>
    ) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    setSignupReason: (state) => {
      state.signupReason = true;
    }
  }
});

export default authSlice.reducer;

// Actions
export const {
  loginStart,
  loginSuccess,
  loginError,
  logoutStart,
  logoutSuccess,
  setUser,
  setError,
  setToken,
  setSignupReason
} = authSlice.actions;

// Epics
const loginEpic: Epic<AuthAction, AuthAction, RootState> = (action$: any) =>
  action$.pipe(
    ofType(loginStart.type),
    switchMap(({ payload: { email, password } }) =>
      from(
        client.mutate({
          mutation: LoginEmailDocument,
          variables: { email, password }
        })
      ).pipe(
        map(({ data }) => {
          const { success, jwt, user, refreshToken } = data.loginEmail;
          if (success) {
            return loginSuccess({
              token: jwt,
              refreshToken,
              user
            });
          }

          return loginError();
        }),
        takeUntil(action$.pipe(ofType(setLocation.type))),
        catchError(() => of(loginError()))
      )
    )
  );

const logoutEpic: Epic<AuthAction, AuthAction, RootState> = (action$) =>
  action$.pipe(ofType(logoutStart.type), mapTo(logoutSuccess()));

export const authEpics = combineEpics(loginEpic, logoutEpic);

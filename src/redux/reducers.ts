import { combineReducers } from '@reduxjs/toolkit';

import gdpr from 'redux/gdpr';

import auth from './auth';
import router from './router';
import toast from './toast';

export const reducers = combineReducers({
  router,
  auth,
  toast,
  gdpr
});

export type RootState = ReturnType<typeof reducers>;

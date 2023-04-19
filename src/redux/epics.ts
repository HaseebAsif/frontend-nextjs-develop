import { combineEpics, Epic } from 'redux-observable';

import { authEpics } from './auth';
import { toastEpics } from './toast';

export const epics: Epic = combineEpics(authEpics, toastEpics);

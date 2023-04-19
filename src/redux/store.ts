import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { epics } from 'redux/epics';
import { reducers } from 'redux/reducers';
import { isBuild } from 'utils';

const epicMiddleware = createEpicMiddleware();

const projectName = 'booksquare';
export const persistConfig = {
  key: `__${projectName}__`,
  storage,
  whitelist: ['auth', 'gdpr']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: !isBuild(),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    epicMiddleware
  ]
});

epicMiddleware.run(epics);

const persistor = persistStore(store);

export { store, persistor };

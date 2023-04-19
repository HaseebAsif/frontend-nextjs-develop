import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from 'redux/reducers';

interface ToastAction {
  type: string;
  payload?: any;
}

export type ToastTypes =
  | 'light'
  | 'dark'
  | 'error'
  | 'success'
  | 'info'
  | 'warning';

interface Toast {
  id: number;
  timestamp: number;
  title?: string;
  message?: string;
  type?: ToastTypes;
}

interface ToastState {
  toasts: Toast[];
}

export interface ToastRootState {
  toast: ToastState;
}

// Selectors
export const selectToast = ({ toast }: ToastRootState) => toast;
export const selectToasts = createSelector([selectToast], ({ toasts }) =>
  toasts.slice().sort((a, b) => a.timestamp - b.timestamp)
);

// Reducers
const initialState: ToastState = {
  toasts: []
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (
      state,
      action: PayloadAction<{
        title?: Toast['title'];
        message?: Toast['message'];
        type?: Toast['type'];
      }>
    ) => state,
    addToastSuccess: (state, action: PayloadAction<Toast>) => {
      const prevToasts = state.toasts;

      if (prevToasts.length > 2) {
        prevToasts.shift();
      }

      state.toasts = [...prevToasts, action.payload];
    },
    deleteToast: (state, action: PayloadAction<{ id: Toast['id'] }>) => {
      state.toasts = state.toasts.filter(({ id }) => id !== action.payload.id);
    },
    deleteAllToasts: (state) => {
      state.toasts = initialState.toasts;
    }
  }
});

export default toastSlice.reducer;

// Actions
export const { addToast, addToastSuccess, deleteToast, deleteAllToasts } =
  toastSlice.actions;

// Epics
const addToastEpic: Epic<ToastAction, ToastAction, RootState> = (action$) =>
  action$.pipe(
    ofType(addToast.type),
    mergeMap(({ payload }) =>
      of({
        type: addToastSuccess.type,
        payload: {
          id: uuidv4(),
          timestamp: new Date().getTime(),
          ...payload
        }
      })
    )
  );

const deleteToastEpic: Epic<ToastAction, ToastAction, RootState> = (action$) =>
  action$.pipe(
    ofType(addToastSuccess.type),
    mergeMap(({ payload }) =>
      of({ type: deleteToast.type, payload }).pipe(delay(2500))
    )
  );

export const toastEpics = combineEpics(addToastEpic, deleteToastEpic);

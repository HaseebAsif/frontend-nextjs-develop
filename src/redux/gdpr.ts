import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Consents } from 'consts/gdpr';

// Types
export type Consent = Consents;

interface GdprState {
  madeDecision: boolean;
  consent: Consent[];
}

export interface GdprRootState {
  gdpr: GdprState;
}

// Selectors
export const selectGdpr = ({ gdpr }: GdprRootState) => gdpr;
export const selectMadeDecision = ({ gdpr }: GdprRootState) =>
  gdpr.madeDecision;
export const selectConsent = ({ gdpr }: GdprRootState) => gdpr.consent;

// Reducers
const initialState: GdprState = {
  madeDecision: false,
  consent: [Consents.Necessary]
};

const gdprSlice = createSlice({
  name: 'gdpr',
  initialState,
  reducers: {
    setMadeDecision: (state, action: PayloadAction<boolean>) => {
      state.madeDecision = action.payload;
    },
    setConsent: (state, action: PayloadAction<Consent[]>) => {
      const { payload } = action;

      // 'necessary' should always be included
      state.consent = payload.includes(Consents.Necessary)
        ? payload
        : [Consents.Necessary, ...payload];
      state.madeDecision = true;
    }
  }
});

export default gdprSlice.reducer;

// Actions
export const { setMadeDecision, setConsent } = gdprSlice.actions;

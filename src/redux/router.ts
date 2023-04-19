import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
interface RouterState {
  location: Location | null;
  previousLocation: Location | null;
}

interface RouterRootState {
  router: RouterState;
}

// Selectors
export const selectRouter = ({ router }: RouterRootState) => router;
export const selectLocation = ({ router }: RouterRootState) => router.location;
export const selectPreviousLocation = ({ router }: RouterRootState) =>
  router.previousLocation;

// Reducers
const initialState: RouterState = {
  location: null,
  previousLocation: null
};

const routerSlice = createSlice({
  name: 'router',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location | null>) => {
      state.location = action.payload;
    },
    setPreviousLocation: (state, action: PayloadAction<Location | null>) => {
      state.previousLocation = action.payload;
    }
  }
});

export default routerSlice.reducer;

// Actions
export const { setLocation, setPreviousLocation } = routerSlice.actions;

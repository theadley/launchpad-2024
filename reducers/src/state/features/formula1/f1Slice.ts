import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Formula1State } from '../../../models/state';

const initialState: Formula1State = {};

export const f1Slice = createSlice({
  name: 'formula1',
  initialState,
  reducers: {
    selectSeason: (state, action: PayloadAction<string>) => {
      state.selectedSeason = action.payload
    },
    selectRound: (state, action: PayloadAction<string>) => {
      state.selectedRound = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectSeason, selectRound } = f1Slice.actions

export default f1Slice.reducer
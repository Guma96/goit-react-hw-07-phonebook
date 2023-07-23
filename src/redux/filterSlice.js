import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

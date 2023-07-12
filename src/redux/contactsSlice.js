import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactMutation,
  deleteContactMutation,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContactMutation.pending](state) {
      state.isLoading = true;
    },
    [addContactMutation.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContactMutation.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [deleteContactMutation.pending](state) {
      state.isLoading = true;
    },
    [deleteContactMutation.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContactMutation.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice.js';
import { contactsApi } from './operations.js';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

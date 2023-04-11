import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './searchSlice';
import { SearchResultsSlice } from './searchResultsSlice';
import { formSlice } from './formSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    searchResults: SearchResultsSlice.reducer,
    form: formSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from './searchSlice';
import { SearchResultsSlice } from './searchResultsSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    searchResults: SearchResultsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

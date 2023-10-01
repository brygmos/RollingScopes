import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import searchReducer from './searchSlice';
import SearchResultsReducer from './searchResultsSlice';
import formReducer from './formSlice';
import { api } from '../../API/RTKQuery';

const rootReducer = combineReducers({
  search: searchReducer,
  searchResults: SearchResultsReducer,
  form: formReducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export const store = setupStore();
export const preloadedState = store.getState();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

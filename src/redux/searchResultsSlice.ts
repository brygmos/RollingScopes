import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from '../components/CardItem';

export interface SearchResultsState {
  cards: CharacterType[];
}

const initialState: SearchResultsState = {
  cards: [],
};

export const SearchResultsSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    // clear(state) {
    //   state.value = '';
    // },
    setSearchResults(state, action: PayloadAction<CharacterType[]>) {
      state.cards = action.payload;
    },
  },
});

export const { setSearchResults } = SearchResultsSlice.actions;
export default SearchResultsSlice.reducer;

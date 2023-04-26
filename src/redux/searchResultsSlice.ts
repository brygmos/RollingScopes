import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from '../components/CharacterItem';

export interface SearchResultsState {
  cards: CharacterType[];
}

const fetchInitialState = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
};

const initialState: SearchResultsState = {
  // cards: [],
  cards: await fetchInitialState(),
};

export const SearchResultsSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setSearchResults(state, action: PayloadAction<CharacterType[]>) {
      state.cards = action.payload;
    },
  },
});

export const { setSearchResults } = SearchResultsSlice.actions;
export default SearchResultsSlice.reducer;

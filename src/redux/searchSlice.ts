import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
  todos: [];
}

const initialState: SearchState = {
  value: '',
  todos: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clear(state) {
      state.value = '';
    },
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { clear, setValue } = searchSlice.actions;
export default searchSlice.reducer;

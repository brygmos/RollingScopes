import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../components/CardItem';

export interface FormState {
  cards: CardType[];
}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardType>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;
export default formSlice.reducer;

// src/store/slices/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  text: string;
}

const initialState: SearchState = {
  text: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;

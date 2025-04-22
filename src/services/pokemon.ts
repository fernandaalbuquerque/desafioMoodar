import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchPokemons = createAsyncThunk('pokemon/fetchAll', async () => {
  const response = await api.get('/pokemon?limit=20&offset=0');
  return response.data.results; // retorna uma lista com nome e URL dos pokémons
});

interface PokemonState {
  data: { name: string; url: string }[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao buscar pokémons';
      });
  },
});

export default pokemonSlice.reducer;

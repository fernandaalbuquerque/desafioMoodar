import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../services/api';

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export const fetchPokemons = createAsyncThunk('pokemon/fetchWithDetails', async () => {
  const response = await api.get('/pokemon?limit=20');
  const results = response.data.results; // [{ name, url }, ...]

  const detailedResults: Pokemon[] = await Promise.all(
    results.map(async (pokemon: { url: string }) => {
      const res = await api.get(pokemon.url); // GET /pokemon/:id
      return {
        id: res.data.id,
        name: res.data.name,
        image: res.data.sprites.front_default,
      };
    }),
  );

  return detailedResults;
});

interface PokemonState {
  data: Pokemon[];
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

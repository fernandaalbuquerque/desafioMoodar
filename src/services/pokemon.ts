import api from './api';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export async function fetchPokemons(offset = 0, limit = 20): Promise<Pokemon[]> {
  const res = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
  const results = res.data.results; // [{ name, url }]

  const detailed = await Promise.all(
    results.map(async (p: { url: string }) => {
      const detail = await api.get(p.url);
      return {
        id: detail.data.id,
        name: detail.data.name,
        image: detail.data.sprites.front_default,
      };
    }),
  );

  return detailed;
}

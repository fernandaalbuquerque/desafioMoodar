import api from './api';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export const ITEM_PER_FETCH = 21;

export async function fetchPokemons(offset = 0, limit = ITEM_PER_FETCH): Promise<Pokemon[]> {
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

export async function fetchPokemonById(id: number) {
  const res = await api.get(`/pokemon/${id}`);
  const data = res.data;

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default,
    weight: data.weight,
    height: data.height,
    types: data.types.map((t: any) => t.type.name),
    abilities: data.abilities.map((a: any) => a.ability.name),
    stats: data.stats.map((s: any) => ({
      name: s.stat.name.toUpperCase().replace('-', ''),
      value: s.base_stat,
    })),
  };
}

export async function fetchPokemonDescription(id: number): Promise<string> {
  const res = await api.get(`/pokemon-species/${id}`);
  const entry = res.data.flavor_text_entries.find((e: any) => e.language.name === 'en');
  return entry ? entry.flavor_text.replace(/\f|\n/g, ' ') : '';
}

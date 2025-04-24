export type PokemonType = {
  id: number;
  name: string;
  image: string;
  weight: number;
  height: number;
  types: string[];
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  color?: string;
};

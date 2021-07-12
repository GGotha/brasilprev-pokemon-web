export interface PokemonDetailsProps {
  classes?: any;
  isFetching: boolean;
  pokemon: Pokemon;
}

export interface Pokemon {
  hp: string;
  name: string;
  supertype: string;
  level: string;
  images: {
    large: string;
  };
  types: [];
  weaknesses: [];
}

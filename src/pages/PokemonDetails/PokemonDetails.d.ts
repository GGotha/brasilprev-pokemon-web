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
  resistances: [];
  attacks: [];
}

export interface Attack {
  name: string;
  convertedEnergyCost: string;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
}

export interface Resistance {
  type: string;
}

export interface CardPokemonProps {
  classes?: any;
  isFetching: boolean;
  cards: Card[];
  onChangeInputValue: (e) => void;
  inputValue: string;
  searchPokemonByName: () => void;
  whenPressEnterSearchPokemonByInputValue: (e) => void;
}

export interface Card {
  id: string;
  images: {
    large: string;
  };
}

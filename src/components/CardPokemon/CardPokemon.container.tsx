import React, { useCallback, useEffect, useState } from "react";
import api from "services/api";
import CardPokemonComponent from "./CardPokemon.component";

const CardPokemonContainer: React.FC = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState<string>("");

  const getPokemonCards = useCallback(async () => {
    setIsFetching(true);

    const response = await api.get("/cards");

    setIsFetching(false);

    setCards(response.data.data);
  }, []);

  const searchPokemonByName = useCallback(async () => {
    setIsFetching(true);

    if (!inputValue || inputValue === "") {
      return getPokemonCards();
    }

    const response = await api.get(`/cards?q=name:${inputValue}`);

    setIsFetching(false);

    setCards(response.data.data);
  }, [inputValue, getPokemonCards]);

  useEffect(() => {
    getPokemonCards();
  }, [getPokemonCards]);

  const onChangeInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const whenPressEnterSearchPokemonByInputValue = useCallback(
    (e) => {
      if (e.key === "Enter") {
        searchPokemonByName();
      }
    },
    [searchPokemonByName]
  );

  return (
    <CardPokemonComponent
      isFetching={isFetching}
      cards={cards}
      onChangeInputValue={onChangeInputValue}
      inputValue={inputValue}
      searchPokemonByName={searchPokemonByName}
      whenPressEnterSearchPokemonByInputValue={
        whenPressEnterSearchPokemonByInputValue
      }
    />
  );
};

export default CardPokemonContainer;

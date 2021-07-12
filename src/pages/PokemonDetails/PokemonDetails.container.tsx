import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "services/api";
import { Pokemon } from "./PokemonDetails";
import PokemonDetailsComponent from "./PokemonDetails.component";

const PokemonDetailsContainer: React.FC = () => {
  const location = useLocation();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<Pokemon>({
    hp: "",
    images: { large: "" },
    level: "",
    name: "",
    supertype: "",
    types: [],
    weaknesses: [],
    resistances: [],
    attacks: [],
  });

  const getPokemonByPokemonId = useCallback(async (pokemonId) => {
    setIsFetching(true);

    const response = await api.get(`/cards/${pokemonId}`);

    console.log(response);

    setIsFetching(false);

    setPokemon(response.data.data);
  }, []);

  useEffect(() => {
    const pokemonId = location.pathname.split("/pokemon-details/")[1];

    getPokemonByPokemonId(pokemonId);
  }, []);

  return <PokemonDetailsComponent isFetching={isFetching} pokemon={pokemon} />;
};

export default PokemonDetailsContainer;

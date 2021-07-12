import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonPokemonType from "components/ButtonPokemonType";
import React, { Fragment } from "react";
import {
  Attack,
  PokemonDetailsProps,
  Resistance,
  Weakness,
} from "./PokemonDetails";
import styles from "./PokemonDetails.styles";

const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  classes,
  isFetching,
  pokemon,
}) => {
  return (
    <Fragment>
      {isFetching ? (
        <div className={classes.isFetching}>
          <CircularProgress size={62} color="secondary" />
        </div>
      ) : (
        <div className={classes.background}>
          <div className={classes.content}>
            <div className={classes.divPokeCard}>
              <img
                src={pokemon?.images?.large}
                alt="Poke Card"
                className={classes.pokeCard}
              />
            </div>
            <div className={classes.contentStats}>
              <div className={classes.divFlexColumn}>
                <h1 className={classes.pokemonName}>{pokemon.name}</h1>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Supertipo</h3>
                  <h3 className={classes.valueStats}>{pokemon.supertype}</h3>
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>hp</h3>
                  <h3 className={classes.valueStats}>
                    {pokemon.hp ?? "Sem Hp"}
                  </h3>
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Level</h3>
                  <h3 className={classes.valueStats}>
                    {pokemon.level ?? "Sem Level"}
                  </h3>
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Habilidades</h3>
                  {pokemon.attacks ? (
                    pokemon?.attacks?.map((attack: Attack) => (
                      <Fragment>
                        <div className={classes.contentAttacks}>
                          <h3 className={classes.valueStats}>{attack.name}</h3>
                          <div>
                            <h1 className={classes.valueStats}>
                              Energia: {attack.convertedEnergyCost}
                            </h1>
                            <h1 className={classes.valueStats}>
                              Dano: {attack.damage}
                            </h1>
                            <h1 className={classes.valueStats}>
                              Descrição: {attack.text}
                            </h1>
                          </div>
                        </div>
                      </Fragment>
                    ))
                  ) : (
                    <h3 className={classes.valueStats}>Sem habilidades</h3>
                  )}
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Tipo</h3>
                  {pokemon.types ? (
                    pokemon?.types?.map((type: string) => (
                      <ButtonPokemonType type={type} />
                    ))
                  ) : (
                    <h3 className={classes.valueStats}>Sem Tipo</h3>
                  )}
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Fraqueza</h3>
                  {pokemon.weaknesses ? (
                    pokemon?.weaknesses?.map((weakness: Weakness) => (
                      <ButtonPokemonType type={weakness.type} />
                    ))
                  ) : (
                    <h3 className={classes.valueStats}>Sem Fraqueza</h3>
                  )}
                </div>
                <div className={classes.titleAndValueStats}>
                  <h3 className={classes.titleStats}>Resistência</h3>
                  {pokemon.resistances ? (
                    pokemon?.resistances?.map((resistance: Resistance) => (
                      <ButtonPokemonType type={resistance.type} />
                    ))
                  ) : (
                    <h3 className={classes.valueStats}>Sem resistência</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default withStyles(styles)(PokemonDetails);

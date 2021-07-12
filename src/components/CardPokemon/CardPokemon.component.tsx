import { CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InputStyled from "components/InputStyled";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardPokemonProps } from "./CardPokemon";
import styles from "./CardPokemon.styles";

const CardPokemon: React.FC<CardPokemonProps> = ({
  classes,
  isFetching,
  cards,
  inputValue,
  onChangeInputValue,
  searchPokemonByName,
  whenPressEnterSearchPokemonByInputValue,
}) => {
  const history = useHistory();

  const handleWithRender = useCallback(() => {
    if (isFetching) {
      return (
        <div className={classes.divCentralizeText}>
          <CircularProgress size={62} color="secondary" />
        </div>
      );
    }

    if (cards.length <= 0) {
      return (
        <div className={classes.divCentralizeText}>
          <h1 style={{ color: "white" }}>Nenhum pokemon encontrado</h1>
        </div>
      );
    }

    return (
      <div className={classes.gridContainer}>
        {cards.map((card: Card) => (
          <div key={card.id} className={classes.gridItem}>
            <button onClick={() => history.push(`/pokemon-details/${card.id}`)}>
              <img
                className={classes.pokeCard}
                src={card.images.large}
                alt={card.id}
              />
            </button>
          </div>
        ))}
      </div>
    );
  }, [isFetching, cards, classes, history]);

  return (
    <div className={classes.divAlignItemsToCenter}>
      <div className={classes.divInputStyled}>
        <InputStyled
          onChange={onChangeInputValue}
          value={inputValue}
          onClick={searchPokemonByName}
          onKeyPress={whenPressEnterSearchPokemonByInputValue}
        />
      </div>
      {handleWithRender()}
    </div>
  );
};

export default withStyles(styles)(CardPokemon);

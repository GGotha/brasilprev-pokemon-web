import { withStyles } from "@material-ui/core/styles";
import CardPokemon from "components/CardPokemon";
import React, { Fragment } from "react";
import { HomeProps } from "./Home";
import styles from "./Home.styles";

const Home: React.FC<HomeProps> = ({ classes }) => {
  return (
    <Fragment>
      <div className={classes.background}>
        <CardPokemon />
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Home);

import { withStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";
import { ButtonPokemonTypeProps, Types } from "./ButtonPokemonType.d";
import styles from "./ButtonPokemonType.styles";

const ButtonWeakness: React.FC<ButtonPokemonTypeProps> = ({
  classes,
  type,
}) => {
  if (type === Types.Colorless) {
    return (
      <Fragment>
        <div className={classes.colorless}>
          <h1 className={classes.text}>Colorless</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Darkness) {
    return (
      <Fragment>
        <div className={classes.darkness}>
          <h1 className={classes.text}>Darkness</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Dragon) {
    return (
      <Fragment>
        <div className={classes.dragon}>
          <h1 className={classes.text}>Dragon</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Fairy) {
    return (
      <Fragment>
        <div className={classes.fairy}>
          <h1 className={classes.text}>Fairy</h1>
        </div>
      </Fragment>
    );
  }
  if (type === Types.Fighting) {
    return (
      <Fragment>
        <div className={classes.fighting}>
          <h1 className={classes.text}>Fighting</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Fire) {
    return (
      <Fragment>
        <div className={classes.fire}>
          <h1 className={classes.text}>Fire</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Grass) {
    return (
      <Fragment>
        <div className={classes.grass}>
          <h1 className={classes.text}>Grass</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Lightning) {
    return (
      <Fragment>
        <div className={classes.lightning}>
          <h1 className={classes.text}>Lightning</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Metal) {
    return (
      <Fragment>
        <div className={classes.metal}>
          <h1 className={classes.text}>Metal</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Psychic) {
    return (
      <Fragment>
        <div className={classes.physic}>
          <h1 className={classes.text}>Physic</h1>
        </div>
      </Fragment>
    );
  }

  if (type === Types.Water) {
    return (
      <Fragment>
        <div className={classes.water}>
          <h1 className={classes.text}>Water</h1>
        </div>
      </Fragment>
    );
  }

  return <div></div>;
};

export default withStyles(styles)(ButtonWeakness);

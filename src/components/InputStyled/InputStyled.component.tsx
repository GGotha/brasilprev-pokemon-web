import { IconButton, InputAdornment, OutlinedInput } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import React, { Fragment } from "react";
import { InputStyledProps } from "./InputStyled";
import styles from "./InputStyled.styles";

const InputStyled: React.FC<InputStyledProps> = ({
  classes,
  onChange,
  onKeyPress,
  onClick,
  value,
}) => {
  return (
    <Fragment>
      <OutlinedInput
        id="standard-adornment-password"
        type="text"
        className={classes.colorWhite}
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={onClick}
              aria-label="toggle password visibility"
            >
              <Search className={classes.colorWhite} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Fragment>
  );
};

export default withStyles(styles)(InputStyled);

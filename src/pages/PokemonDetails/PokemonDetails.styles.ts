import { createStyles } from "@material-ui/core";

const styles = createStyles({
  root: {},
  background: {
    backgroundColor: "#36454f",
    minHeight: "100%",
    height: "auto !important",
  },
  isFetching: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  divFlexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  divPokeCard: {
    margin: "0px 30px",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "@media(max-width: 599px) and (min-width: 0px)": {
      flexDirection: "column",
    },
  },
  pokemonName: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  titleAndValueStats: {
    margin: "8px 15px",
  },
  contentStats: {
    width: "25%",
    "@media(max-width: 599px) and (min-width: 0px)": {
      marginTop: "30px",
      width: "100%",
    },
    height: "400px",
  },
  titleStats: {
    color: "white",
    textTransform: "capitalize",
    fontSize: "16px",
    marginBottom: "5px",
  },
  valueStats: {
    color: "white",
    fontWeight: "normal",
    fontSize: "16px",
  },
  pokeCard: {
    width: "300px",
    height: "400px",
    "@media(max-width: 599px) and (min-width: 0px)": {
      marginTop: "40%",
    },
  },
});

export default styles;

import { createStyles } from "@material-ui/core";

const styles = (theme: any) =>
  createStyles({
    root: {},
    gridContainer: {
      display: "grid",
      "@media(max-width: 599px) and (min-width: 0px)": {
        gridTemplateColumns: "repeat(1, 300px)",
      },
      "@media(max-width: 799px) and (min-width: 599px)": {
        gridTemplateColumns: "repeat(2, 300px)",
      },
      "@media(max-width: 1279px) and (min-width: 800px)": {
        gridTemplateColumns: "repeat(3, 300px)",
      },
      "@media(min-width: 1280px) and (max-width: 1440px)": {
        gridTemplateColumns: "repeat(4, 300px)",
      },
      gridTemplateColumns: "repeat(5, 300px)",
      padding: "10px",
    },
    gridItem: {
      width: "auto",
      padding: "20px",
      fontSize: "30px",
      textAlign: "center",
    },
    pokeCard: {
      width: "250px",
      height: "350px",
    },
    divCentralizeText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    divInputStyled: {
      display: "flex",
      justifyContent: "center",
      width: "300px",
      margin: "20px 10px",
    },
    divAlignItemsToCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
    },
  });

export default styles;

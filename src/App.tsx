import GlobalStyles from "global/styles";
import React, { Fragment } from "react";
import Routes from "routes";

const App: React.FC = () => {
  return (
    <Fragment>
      <Routes />
      <GlobalStyles />
    </Fragment>
  );
};

export default App;

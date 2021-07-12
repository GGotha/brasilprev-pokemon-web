import Home from "pages/Home";
import PokemonDetails from "pages/PokemonDetails";
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes: React.FC = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon-details/:id" component={PokemonDetails} />
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default Routes;

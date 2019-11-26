import React from "react";
import { Route, Switch } from "react-router-dom";

import { MyMoviesContainer } from "./MyMovies";
import { Grid } from "../components/Grid";
import { Header } from "../components/Header";
import { UserSignUp } from "../components/User/UserSignUp";

export const Main = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <Route path="/movies" component={Grid} />
        <Route path="/" exact component={MyMoviesContainer} />
        <Route path="/userSignUp" component={UserSignUp} />
        <Route path="/movie_category/:category"
      </div>
    </div>
  );
};

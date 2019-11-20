import React from "react";
import { Route, Switch } from "react-router-dom";

import { MyMoviesContainer } from "../containers/MyMovies";
import { Grid } from "../components/Grid";
import { Header } from "../components/Header";

export const Main = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <Route path="/movies" component={Grid} />
        {/* <MyMoviesContainer /> */}
        {/*  При таком состоянии не работает ==> <Route path="/movies" component={MyMoviesContainer} /> не успевает загрузится  */}
        <Route path="/" exact component={MyMoviesContainer} />
      </div>
    </div>
  );
};

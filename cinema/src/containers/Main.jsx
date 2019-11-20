import React from "react";

import { Route } from "react-router-dom";
import { MyMoviesContainer } from "../containers/MyMovies";
import { Grid } from "../components/Grid";
import { MyBodyMovieContainer } from "./BodyMovie";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div>
            <Route path="/" exact component={MyMoviesContainer} />
            <Route path="/movies" component={Grid} />
            <Route path="/movie" component={MyBodyMovieContainer} />
          </div>
        </div>
      </div>
    );
  }
}

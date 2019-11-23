import React from "react";
import { Route, Switch } from "react-router-dom";

import { MyMoviesContainer } from "../containers/MyMovies";
import { Grid } from "../components/Grid";
import { MyBodyMovieContainer } from "./BodyMovie";
import { Carousel } from "../components/Carousel";
import HomePage from "../components/HomePage";
import { UserInput } from "../components/User/UserInput";
import { User } from "../containers/User";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div>
            <MyBodyMovieContainer />
            <Route path="/user" component={User} />
            {/* <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/movies" component={Grid} />
              <Route path="/film" component={MyBodyMovieContainer} />
            </Switch> */}
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import { Carousel } from "./Carousel";
import { MyMoviesContainer } from "../containers/MyMovies";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Carousel />
        <MyMoviesContainer />
      </div>
    );
  }
}

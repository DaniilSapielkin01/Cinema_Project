import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { MyBodyMovieContainer } from "./BodyMovie";
import HomePage from "../components/HomePage";
import { User } from "./User";
import { MyMovieCategory } from "../components/MovieCategory";

import { getMovies } from "../actions/movies";

export class Main extends React.Component {
  // componentDidMount() {
  //   this.props.getMovies();
  // }

  render() {
    // console.log("log", getMovies);

    const { isLoading } = this.props;

    return (
      <div className="main">
        <div className="container">
          <div>
            {!isLoading && (
              <Switch>
                <Route path={"/user"} component={User} />
                <Route exact path="/" component={HomePage} />
                <Route path={"/film/:id"} component={MyBodyMovieContainer} />
                <Route
                  path={"/movies_category/:_genre"}
                  component={MyMovieCategory}
                />
              </Switch>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMovies
};
const mapStateToProps = state => ({
  isLoading: state.loading.isLoading
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

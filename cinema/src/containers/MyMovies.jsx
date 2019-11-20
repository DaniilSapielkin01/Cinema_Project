import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class MyMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    // console.log(this.props);
    const { isLoading, errorMsg, movies } = this.props;

    return (
      <div className="container">
        <h4>Рекомендации к проссмотру </h4>
        <div className="posters row">
          {isLoading ? (
            <p className="name-logo">Loading ...</p>
          ) : (
            movies.map((item, i) => (
              <div key={i} className="block-poster col-md-2 col-sm-3">
                <Link to="/movie">
                  <img src={item.poster} alt="" className="img-poster-title" />
                </Link>
              </div>
            ))
          )}
          <span>{errorMsg}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMsg: state.errorMsg,
  isLoading: state.isLoading,
  movies: state.movies
});

const mapDispatchToProps = {
  getMovies
};

export const MyMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMovies);

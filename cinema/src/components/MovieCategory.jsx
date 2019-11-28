import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class MovieCategory extends React.Component {
  state = {
    movies: [],
    genres: {}
  };
  componentDidMount() {
    const category = this.props.match.params._genre;

    console.log("category", category);
    console.log("category_props", this.props);

    const moviesGenre = this.props.movies.filter(item => {
      return item.genre.some(genre => {
        return genre.toLowerCase().trim() === category;
      });
    });
    this.setState({ movies: moviesGenre });
    console.log("genre", moviesGenre);
  }

  render() {
    const { movies, genres } = this.state;
    console.log("genr11e", movies);
    return (
      <div className="container">
        <h5>фильмы 1111</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  errorMsg: state.errorMsg,
  movies: state.movies
});

const mapDispatchToProps = {
  getMovies
};

export const MyMovieCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCategory);

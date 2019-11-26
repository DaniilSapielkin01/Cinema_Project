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
    const category = this.props.match.params.category;

    const movies = this.props.movies.filter(item => {
      return item.genre.some(genre => {
        return genre.toLowerCase().trim() === category;
      });
    });
    this.setState({ movies });
    // console.log("___", this.item.genre);
  }

  render() {
    console.log("___", this.genres);

    const { errorMsg, movies } = this.state;
    console.log("MOVIE_CATEGORY props => ", this.props);

    return (
      <div className="container">
        <h5>фильмы 1111{movies}</h5>
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

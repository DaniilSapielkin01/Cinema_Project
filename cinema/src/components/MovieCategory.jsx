import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class MovieCategory extends React.Component {
  state = {
    movies: [],
    genre: ""
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
    this.setState({
      movies: moviesGenre,
      genre: category
     });
    console.log("genre", moviesGenre);
  }


  componentDidUpdate() {
    const category = this.props.match.params._genre;
    if (this.state.genre !== category) {

    console.log("appdate", category);
    console.log("appdate_props", this.props);

    const moviesGenre = this.props.movies.filter(item => {
      return item.genre.some(genre => {
        return genre.toLowerCase().trim() === category;
      });
    });
    console.log("genre apdate", moviesGenre);

    this.setState({ movies: moviesGenre,
      genre: category });
  }
  }

  render() {
    const { isLoading, errorMsg, movies, genres } = this.state;
    console.log("genr11e", movies);
    return (
      <div className="container">
        <div className="posters row">
          {isLoading ? (
            <p className="name-logo">Loading ...</p>
          ) : (
            movies.map((item, i) => (
              <div key={i} className="block-poster col-md-2 col-sm-3">
                <div className="background-img-block">
                  <Link to={`/film/${item._id}`}>
                    <img
                      src={item.poster}
                      alt=""
                      className="img-poster-title"
                    />
                    <h5 className="heading-slim-film">{item.title}</h5>
                    <div className="overlay-img"></div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        <br />
        <span> {errorMsg}</span>
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

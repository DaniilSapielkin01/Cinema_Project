import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class MyMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    // console.log("MyMovies props =>", this.props);
    const { isLoading, errorMsg, movies } = this.props;
    // console.log("props.movie=>", this.props.movie);
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

export const MyMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyMovies);

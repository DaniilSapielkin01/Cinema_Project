import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class MyMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log("MyMovies props =>", this.props);
    const { isLoading, errorMsg, movies } = this.props;

    return (
      <div className="container">
        <div className="posters row">
          {/* {isLoading ? (
            <p className="name-logo">Loading ...</p>
          ) : (
            movies.map((item, i) => (
              <div key={i} className="block-poster col-md-2 col-sm-3">
                <Link to="/film">
                  <img src={item.poster} alt="" className="img-poster-title" />
                </Link>
              </div>
            ))
          )} */}
        </div>
        <br />
        <span>MYMOVIES = компонент: {errorMsg}</span>
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

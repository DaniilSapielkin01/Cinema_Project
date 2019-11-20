import React from "react";
import { connect } from "react-redux";
import { link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class BodyMovie extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log("props in BodyMovie =>", this.props);
    const { isLoading, errorMsg, movies } = this.props;
    return (
      <div className="conainer">
        {isLoading ? (
          <p className="name-logo">Loading ...</p>
        ) : (
          movies.map((item, i) => (
            <div key={i} className="">
              <video src={item}></video>
            </div>
          ))
        )}
         <span>{errorMsg}</span>
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

export const MyBodyMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyMovie);

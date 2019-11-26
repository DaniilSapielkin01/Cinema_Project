import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";

class BodyMovie extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    const movie = this.props.movies.find(item => item._id === movieId);

    this.setState({ movie });
  }

  render() {
    const { errorMsg, movie } = this.state;
    // console.log("BodyMovie this.PROPS =>", this.props);
    // console.log("BodyMovie =>", this.state.movie);

    return (
      <div className="conainer ">
        <Link to="/">
          <button className="btn btn-back icon-back">Назад</button>
        </Link>
        <div className="container-body-film">
          <h4 className="heading-h4">{movie.title}</h4>
          <div className="info-film">
            <p>
              {`${movie.country} , `}
              {`${movie.genre} , `}
              {` Возраст +${movie.age}`}
            </p>
          </div>
          <div className="btn-container">
            <button className="btn icon-ticket">Купить билет</button>
          </div>
          <div className="block-video d-flex justify-content-center">
            <iframe
              width="100%"
              height="100%"
              src={movie.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture; "
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <p>{movie.description}</p>
          </div>
          {/* Переход по билетам */}
          {/* {isLoading ? (
            <p className="name-logo">Loading ...</p>
          ) : (
            movies.map((item, i) => (
              <div key={i} className="">
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Totam aspernatur perferendis sed
                </h1>
              </div>
            ))
          )} */}

          <span>{errorMsg}</span>
        </div>
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

export const MyBodyMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyMovie);

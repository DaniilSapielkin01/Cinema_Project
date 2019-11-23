import React from "react";
import { connect } from "react-redux";
import { link } from "react-router-dom";

import { getMovies } from "../actions/movies";
import { MyMoviesContainer } from "./MyMovies";

class BodyMovie extends React.Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log("BodyMovie props  =>", this.props);
    const { isLoading, errorMsg, movies } = this.props;
    return (
      <div className="conainer ">
        <div className="container-body-film">
          <h4 className="heading-h4">Название фильма!</h4>
          <div className="info-film">
            <p>2014-2019, США, Детективы, Драмы, Криминал</p>
          </div>
          <div className="btn-container">
            <button className="btn icon-ticket">Купить билет</button>
          </div>
          <div className="block-video d-flex justify-content-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zdJIYldakwY"
              frameborder="0"
              allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture; "
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <p>
              ___item.info___ Готэм давно стал столицей преступного мира. Власть
              над городом захватывают бандиты, безумцы и суперзлодеи, которым
              противостоит небольшая группа полицейских во главе с капитаном
              Джеймсом...
            </p>
          </div>
          {/* Переход по билетам */}

          {/* now this ERROR in 22:34  */}
          {/* {isLoading ? (
          <p className="name-logo">Loading ...</p>
        ) : (
          movies.map((item, i) => (
            <div key={i} className="">
              <h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                aspernatur perferendis sed
              </h1>
            </div>
          ))
        )} */}

          <span>
            ____BodyMovie:ошибка по получению данных об фильме ВЫШЕ ЭТО ТЕСТ___
            <br />
            {errorMsg}
          </span>
        </div>
        <MyMoviesContainer />
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

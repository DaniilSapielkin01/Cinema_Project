import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";
import {
  SCARY,
  COMEDY,
  FANTASY,
  ROMANCE,
  ACTION,
  TRAILERS
} from "../routes/constants";

class Nav extends React.Component {
  state = {
    genre: {}
  };

  render() {
    // const { movies } = this.props;

    return (
      <nav className="nav p-2 bd-highlight">
        <Link className="nav-link " to="/">
          Главная
        </Link>
        <div className="dropdown">
          <Link className="nav-link" to="/All_Movies">
            <button
              className="btn btn-nav-menu btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Фильмы
            </button>
          </Link>
          <div className="dropdown-menu">
            <Link to={`/movies_category/${SCARY}`}>
              <button className="dropdown-item" type="button">
                Ужасы
              </button>
            </Link>
            <Link to={`/movies_category/${COMEDY}`}>
              <button className="dropdown-item" type="button">
                Комедии
              </button>
            </Link>
            <Link to={`/movies_category/${TRAILERS}`}>
              <button className="dropdown-item" type="button">
                Трейлеры
              </button>
            </Link>
            <Link to={`/movies_category/${ACTION}`}>
              <button className="dropdown-item" type="button">
                Боевики
              </button>
            </Link>
            <Link to={`/movies_category/${ROMANCE}`}>
              <button className="dropdown-item" type="button">
                Мелодраммы
              </button>
            </Link>
            <Link to={`/movies_category/${FANTASY}`}>
              <button className="dropdown-item" type="button">
                Фантастика
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  errorMsg: state.errorMsg,
  movies: state.movies,
  genre: state.genre
});
const mapDispatchToProps = {
  getMovies
};

export const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);
//Благодаря изменению логики в nav из функционального типа без какой либо логики, в изменение в классовый мы получаем всю информацию о фильмах из props и можем отследить какой жанр был  выбран

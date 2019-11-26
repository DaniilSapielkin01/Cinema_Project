import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMovies } from "../actions/movies";
import { SCARY } from "../routes/constants"

class Nav extends React.Component {
  state = {
    genre: {}
  };
  componentDidMount() {
    // this.props.getMovies();
    // const movieGenre = this.props.match.params.genre;
    // const genre = this.props.movies.filter(item => item.genre === movieGenre);
    // this.setState({ genre });
  }

  render() {
    const { movies } = this.props;
    console.log("nav", this.state);
    console.log("nav movie", this.props.movies);

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
            <Link to="/movies_category/Comedy">
              <button className="dropdown-item" type="button">
                Комедии
              </button>
            </Link>
            <Link to="/movies_category/Trailers">
              <button className="dropdown-item" type="button">
                Трейлеры
              </button>
            </Link>
            <Link to="/movies_category/Action">
              <button className="dropdown-item" type="button">
                Боевики
              </button>
            </Link>
            <Link to="/movies_category/Romance">
              <button className="dropdown-item" type="button">
                Мелодраммы
              </button>
            </Link>
            <Link to="/movies_category/Fantasy">
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

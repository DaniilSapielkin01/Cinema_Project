import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => (
  <nav className="nav p-2 bd-highlight">
    <Link className="nav-link " to="/">
      Фильмы
    </Link>
    <Link className="nav-link" to="/movies">
      Мультфильмы
    </Link>
  </nav>
);

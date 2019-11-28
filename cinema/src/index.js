//BOOTSTRAP 4
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
//SLICK for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//React
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

//Developer Styles
import "./assets/style/index.css";
//
import { store } from "./store";
import { Cinema } from "./containers/Cinema";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Cinema />
    </Router>
  </Provider>,
  document.getElementById("root")
);

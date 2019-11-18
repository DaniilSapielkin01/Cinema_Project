import React from "react";
import ReactDOM from "react-dom";
//BOOTSTRAP 4
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

//Developer Styles
import "./assets/style/index.css";
import "./assets/style/icons/css/index.css";
//
import { Cinema } from "../src/containers/Cinema";

ReactDOM.render(<Cinema />, document.getElementById("root"));

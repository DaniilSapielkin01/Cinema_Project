import React from "react";
// import { Provider } from "react-redux";
// import { Router } from "react-router-dom";
// import { createBrowserHistory } from "history";

//Components JSX
import { Main } from "./Main";
import { Header } from "../components/index";
import { Footer } from "../components/Footer";
//Components/Action

//Assets/style
import "../assets/style/index.css";

export const Cinema = () => (
  <div className="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);

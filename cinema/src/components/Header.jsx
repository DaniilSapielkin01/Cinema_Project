import React from "react";

import { Logo } from "./index";
import { User } from "../containers/User";
import { NavContainer } from "./Nav";

export const Header = () => (
  <header>
    <div className="container d-flex bd-highlight mb-3">
      <Logo />
      <NavContainer />
      <User />
    </div>
  </header>
);

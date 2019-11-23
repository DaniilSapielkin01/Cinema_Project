import React from "react";

import { Logo, Nav } from "./index";
import { User } from "../containers/User";

export const Header = () => (
  <header>
    <div className="container d-flex bd-highlight mb-3">
      <Logo />
      <Nav />
      <User />
    </div>
  </header>
);

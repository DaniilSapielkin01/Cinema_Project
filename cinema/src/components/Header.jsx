import React from "react";

import { Logo, Nav, User } from "./index";

export const Header = () => (
  <header>
    <div className="container d-flex bd-highlight mb-3">
      <Logo />
      <Nav />
      <User />
    </div>
  </header>
);

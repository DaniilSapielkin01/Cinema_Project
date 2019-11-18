import React, { Component } from "react";

import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { UserIcon } from "./User";

export const Header = () => (
  <header>
    <div className="left-block">
      <Logo />
      {/* <Nav /> */}
    </div>
    <div className="rigth-block">
      <UserIcon />
    </div>
  </header>
);

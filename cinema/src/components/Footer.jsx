import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-block">
      <div className="container d-flex justify-content-between ">
        <ul className="footer-nav d-flex">
          <li>
            <a
              href="https://uk-ua.facebook.com"
              className="icon-facebook"
              target="blank"
            />
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="icon-twitter"
              target="blank"
            />
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              className="icon-instagram"
              target="blank"
            />
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              className="icon-pinterest"
              target="blank"
            />
          </li>
        </ul>
        <p className="author">Author: Sapielkin Daniil</p>
      </div>
    </footer>
  );
};

import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        Porfolio
      </Link>
      <ul>
        <li>
          <a href="#project">Work</a>
        </li>
        <li>
          <Link to="/about-page">About</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

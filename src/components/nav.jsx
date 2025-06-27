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
          <Link to="/projects">Work</Link>
        </li>
        <li>
          <Link to="/about-page">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

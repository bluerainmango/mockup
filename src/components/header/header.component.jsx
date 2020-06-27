import React from "react";

import "./header.styles.scss";

export default function Header() {
  return (
    <nav className="nav-menu">
      <ul className="menu-list">
        <li>
          <a href="#">
            <img src="#" alt="nav-logo"></img>
          </a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Mens</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Sale!</a>
        </li>
      </ul>
    </nav>
  );
}

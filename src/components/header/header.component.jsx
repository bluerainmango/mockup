import React from "react";

import "./header.styles.scss";

export default function Header() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <a href="#">Logo</a>
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

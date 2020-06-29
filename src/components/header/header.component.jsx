import React, { useRef } from "react";
import logo from "../../assets/images/logo.png";
import hamburger from "../../assets/images/hamburger-icon.png";
import cart from "../../assets/images/cart.png";

import menus from "./header.data";
import listGenerator from "../utils/list-generator";
import "./header.styles.scss";

export default function Header() {
  const mobileMenu = useRef();

  const handleClickClose = (e) => {
    mobileMenu.current.classList.add("hidden");
  };

  const handleClickShow = (e) => {
    console.log(
      "🍔 clicked burger menu: ",
      e.target,
      mobileMenu.current.classList
    );
    mobileMenu.current.classList.remove("hidden");
  };

  return (
    <nav className="menu">
      <div className="menu__list--mobile hidden" ref={mobileMenu}>
        <a href="#" className="close" onClick={handleClickClose}>
          &times;
        </a>
        <ul>{menus.map((menu, i) => listGenerator(menu))}</ul>
      </div>
      <img
        className="menu__burger"
        src={hamburger}
        alt="hamgurger-menu-icon"
        onClick={handleClickShow}
      />
      <ul className="menu__list">
        <li>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </li>
        {menus.map((menu, i) => listGenerator(menu))}
      </ul>
      <img className="menu__cart" src={cart} alt="cart" />
    </nav>
  );
}

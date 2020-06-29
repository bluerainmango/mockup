import React, { useState, useEffect } from "react";
import links from "./footer.data";
import Accordion from "../accordion/accordion.component";
import listGenerator from "../utils/list-generator";

import "./footer.styles.scss";

const RegularList = function () {
  return (
    <div className="links">
      <div className="links__customer">
        <h4>Customer Service</h4>
        <ul className="">
          {links.customer.map((list, i) => listGenerator(list))}
        </ul>
      </div>
      <div className="links__company">
        <h4>Company</h4>
        <ul>{links.company.map((list, i) => listGenerator(list))}</ul>
      </div>
    </div>
  );
};

export default function Footer() {
  const [accordionFooter, setAccordionFooter] = useState(false);

  const measureWidth = (e) => {
    const w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // console.log("😊 width: ", w);
    w >= 400 ? setAccordionFooter(false) : setAccordionFooter(true);
  };

  //! Measure window's width whenever resizing
  useEffect(() => {
    measureWidth();
    window.addEventListener("resize", measureWidth);

    return () => {
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer__menu">
        {!accordionFooter && <RegularList />}
        {accordionFooter && <Accordion {...links} />}
      </div>
      <div className="footer__social">
        <h4>Follow Us</h4>
        <ul>{links.social.map((list, i) => listGenerator(list))}</ul>
      </div>
    </footer>
  );
}

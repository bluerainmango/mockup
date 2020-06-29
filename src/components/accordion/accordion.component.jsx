import React, { useState, useRef, useEffect } from "react";
import listGenerator from "../utils/list-generator";

import "./accordion.styles.scss";

export default function Accordion(props) {
  const [currentList, setCurrentList] = useState("accordion--1");

  const accordion1 = useRef();
  const accordion2 = useRef();

  //! Detect the current list clicked
  const handleClick = (e) => {
    const div = e.target.closest(".accordion");
    // console.log("e.target", e.target, div.classList[1]);

    setCurrentList(div.classList[1]);
  };

  //! Attach proper class names for fold/unfold and "-","+" icons
  useEffect(() => {
    if (currentList === "accordion--1") {
      accordion1.current.querySelector("ul").classList.add("active");
      accordion2.current.querySelector("ul").classList.remove("active");
    } else {
      accordion1.current.querySelector("ul").classList.remove("active");
      accordion2.current.querySelector("ul").classList.add("active");
    }
    accordion1.current.classList.toggle("plus");
    accordion2.current.classList.toggle("plus");
  }, [currentList]);

  return (
    <div>
      {console.log("accordion inside: ", props)}
      <div className="accordion accordion--1 plus" ref={accordion1}>
        <h4 onClick={handleClick}>Customer Service</h4>
        <ul class="list active" id="accordion--1">
          {props.customer &&
            props.customer.map((list, i) => listGenerator(list))}
        </ul>
      </div>

      <div className="accordion accordion--2" ref={accordion2}>
        <h4 onClick={handleClick}>Company</h4>
        <ul class="list" id="accordion--2">
          {props.company && props.company.map((list, i) => listGenerator(list))}
        </ul>
      </div>
    </div>
  );
}

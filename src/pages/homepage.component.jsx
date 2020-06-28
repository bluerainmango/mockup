import React from "react";
import HeadBar from "../components/head-bar/head-bar.component";
import Header from "../components/header/header.component";
import Slide from "../components/slide/slide.component";

function Homepage() {
  return (
    <div className="Homepage">
      <HeadBar />
      <Header />
      <Slide />
    </div>
  );
}

export default Homepage;

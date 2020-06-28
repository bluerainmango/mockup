import React from "react";
import HeadBar from "../components/head-bar/head-bar.component";
import Header from "../components/header/header.component";
import Slide from "../components/slide/slide.component";
import Collections from "../components/collections/collections.component";

function Homepage() {
  return (
    <div className="Homepage">
      <HeadBar />
      <Header />
      <Slide />
      <Collections />
    </div>
  );
}

export default Homepage;

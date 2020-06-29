import React from "react";
import HeadBar from "../components/head-bar/head-bar.component";
import Header from "../components/header/header.component";
import Slide from "../components/slide/slide.component";
import Collections from "../components/collections/collections.component";
import Products from "../components/products/products.component";
import MiddleBanner from "../components/middle-banner/middle-banner.component";

function Homepage() {
  return (
    <div className="Homepage">
      <HeadBar />
      <Header />
      <Slide />
      <Collections />
      <Products />
      <MiddleBanner />
    </div>
  );
}

export default Homepage;

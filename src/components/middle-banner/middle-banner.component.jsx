import React from "react";

import Banner from "../banner/banner.component";
import img from "../../assets/images/hero-image-2.jpg";
import imgMobile from "../../assets/images/hero-image-2-mobile.jpg";

import "./middle-banner.styles.scss";

const data = {
  img: img,
  imgMobile: imgMobile,
  title: "Title Goes Here",
  tagline: "Tagline will go right here.",
  callToAction: "SHOP NOW",
  url: "#",
  textPosition: "right",
  btnColor: "green",
};

export default function MiddleBanner() {
  return (
    <section className="middleBanner">
      <Banner {...data} />
    </section>
  );
}

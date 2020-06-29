import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Banner from "../banner/banner.component";
import slideImg1 from "../../assets/images/hero-image-1.jpg";
import slideImgMobile1 from "../../assets/images/hero-image-1-mobile.jpg";

import "./slide.styles.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const data = [
  {
    img: slideImg1,
    imgMobile: slideImgMobile1,
    title: "Title Goes Here",
    tagline: "Tagline will go right here.",
    callToAction: "SHOP NOW",
    url: "#",
    textPosition: "left",
    btnColor: "black",
  },
  {
    img: slideImg1,
    imgMobile: slideImgMobile1,
    title: "Title Goes Here 2",
    tagline: "Tagline will go right here 2",
    callToAction: "LEARN MORE",
    url: "#",
    textPosition: "left",
    btnColor: "black",
  },
  {
    img: slideImg1,
    imgMobile: slideImgMobile1,
    title: "Title Goes Here 3",
    tagline: "Tagline will go right here 3",
    callToAction: "CLICK HERE",
    url: "#",
    textPosition: "left",
    btnColor: "black",
  },
  {
    img: slideImg1,
    imgMobile: slideImgMobile1,
    title: "Title Goes Here 4",
    tagline: "Tagline will go right here 4",
    callToAction: "BUY NOW",
    url: "#",
    textPosition: "left",
    btnColor: "black",
  },
];

export default function Slide(props) {
  return (
    <Carousel
      className="carousel"
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((info, i) => {
        return <div key={`${info.img}-${i}`}>{<Banner {...info} />}</div>;
      })}
    </Carousel>
  );
}

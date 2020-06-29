import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import data from "./ig-carousel.data";

import "./ig-carousel.styles.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const postGenerator = ({ img, url }) => (
  <img src={img} className="ig__img" alt={img} />
);

export default function Products(props) {
  return (
    <section className="ig">
      <h2 className="ig__title">Follow us on Instagram!</h2>
      <Carousel
        className="ig__carousel"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((info, i) => {
          return <div key={`${info.img}-${i}`}>{postGenerator(info)}</div>;
        })}
      </Carousel>
    </section>
  );
}

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import data from "./product.data";
import rightArrow from "../../assets/images/arrow-right.png";
import leftArrow from "../../assets/images/arrow-left.png";

import "./products.styles.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const productGenerator = ({ img, name, collection, price }) => {
  return (
    <div className="product">
      <img
        src={img}
        className="product__img"
        alt={`${collection}-${name}`}
      ></img>
      <ul className="product__content">
        <li className="product__name">{name}</li>
        <li className="product__collection">{collection}</li>
        <li className="product__price">{price}</li>
      </ul>
    </div>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <img
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
      src={leftArrow}
      alt="carousel-left-arrow"
      onClick={() => onClick()}
    />
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <img
      className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      src={rightArrow}
      alt="carousel-right-arrow"
      onClick={() => onClick()}
    />
  );
};

export default function Products(props) {
  return (
    <section className="products">
      <h2 className="products__title">New Arrival</h2>
      <Carousel
        className="products__carousel"
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {data.map((info, i) => {
          return <div key={`${info.img}-${i}`}>{productGenerator(info)}</div>;
        })}
      </Carousel>
    </section>
  );
}

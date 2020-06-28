import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import productImg from "../../assets/images/product-image-1.jpg";

import "./products.styles.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    img: productImg,
    name: "Product Title",
    collection: "Women's T-Shirt",
    price: "$19.99",
  },
  {
    img: productImg,
    name: "Product Title",
    collection: "Women's T-Shirt",
    price: "$19.99",
  },
  {
    img: productImg,
    name: "Product Title",
    collection: "Women's T-Shirt",
    price: "$19.99",
  },
  {
    img: productImg,
    name: "Product Title",
    collection: "Women's T-Shirt",
    price: "$19.99",
  },
];

const productGenerator = ({ img, name, collection, price }) => {
  return (
    <div className="product">
      <img
        src={img}
        className="product__img"
        alt={`${collection}-${name}`}
      ></img>
      <ul className="product__content">
        <li>{name}</li>
        <li>{collection}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

export default function Products(props) {
  return (
    <Carousel
      className="products"
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[]}
      //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {data.map((info, i) => {
        return <div key={`${info.img}-${i}`}>{productGenerator(info)}</div>;
      })}
    </Carousel>
  );
}

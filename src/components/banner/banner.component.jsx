import React from "react";

import "./banner.styles.scss";

export default function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__content--title">{props.title}</h1>
        <p className="banner__content--tagline">{props.tagline}</p>
        <a href="#" className="banner__content--link">
          {props.callToAction}
        </a>
      </div>
      <picture className="banner__img">
        <source media="(max-width: 375px)" srcSet={props.imgMobile} />
        <source srcSet={props.img} />
        <img src={props.img} alt="banner-img"></img>
      </picture>
    </div>
  );
}

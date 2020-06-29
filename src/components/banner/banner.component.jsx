import React from "react";

import "./banner.styles.scss";

export default function Banner(props) {
  return (
    <div className="banner">
      <div className={`banner__content banner__content--${props.textPosition}`}>
        <h1 className="banner__content--title">{props.title}</h1>
        <p className="banner__content--tagline">{props.tagline}</p>
        <a
          href={props.url}
          className={`banner__content--link banner__content--${props.btnColor}`}
        >
          {props.callToAction}
        </a>
      </div>
      <picture className="banner__img">
        <source media="(max-width: 600px)" srcSet={props.imgMobile} />
        <source srcSet={props.img} />
        <img src={props.img} alt="banner-img"></img>
      </picture>
    </div>
  );
}

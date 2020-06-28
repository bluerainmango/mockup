import React from "react";

import "./collection-card.styles.scss";

export default function Card({ collection, i }) {
  return (
    <div className="card">
      <picture className="card__img">
        <source
          media="(max-width: 1334px)"
          srcSet={collection.imgMobile ? collection.imgMobile : collection.img}
        />
        <source srcSet={collection.img} />
        <img
          className="card__img"
          src={collection.img}
          alt={`card-img-${i}`}
        ></img>
      </picture>

      <p className="card__name">{collection.name}</p>
    </div>
  );
}

import React from "react";
import collection1 from "../../assets/images/womens-image.jpg";
import collection2 from "../../assets/images/mens-image.jpg";
import collection3 from "../../assets/images/accessories-image.jpg";
import collectionMobile3 from "../../assets/images/accessories-image-mobile.jpg";

import "./collections.styles.scss";

export default function Collections() {
  return (
    <section className="cards">
      <div className="cards__top">
        <div className="card">
          <img
            className="card__img"
            src={collection1}
            alt={`card-img-womens`}
          ></img>
          <p className="card__name">Womens</p>
        </div>
        <div className="card">
          <img
            className="card__img"
            src={collection2}
            alt={`card-img-mens`}
          ></img>
          <p className="card__name">Mens</p>
        </div>
      </div>

      <div className="cards__bottom">
        <div className="card">
          <picture className="card__img">
            <source media="(max-width: 37.5em)" srcSet={collectionMobile3} />
            <source srcSet={collection3} />
            <img
              className="card__img"
              src={collection3}
              alt={`card-img-accesories`}
            ></img>
          </picture>

          <p className="card__name">Accessories</p>
        </div>
      </div>
    </section>
  );
}

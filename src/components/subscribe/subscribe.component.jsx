import React from "react";

import emailIcon from "../../assets/images/email-icon.png";
import "./subscribe.styles.scss";

export default function Subscribe() {
  return (
    <section className="subscribe">
      <div className="subscribe__title">
        <img src={emailIcon} alt="subscribe-email-icon" />
        <h3>Sign up & Stay Connected</h3>
      </div>
      <div className="subscribe__content">
        {/* <div> */}
        <p>
          Sing up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
        {/* </div> */}
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
          ></input>
          <button type="submit">Subscirbe</button>
        </form>
      </div>
    </section>
  );
}

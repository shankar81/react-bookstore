import React from "react";
import styles from "./Hero.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className={styles.heading}>Welcome to our digital product store</h1>
        <p className={styles.para}>
          You can use this area to describe the products in your digital store.
          This responsive theme is ideal for selling many types of digital
          products such as e-books, audio CDs, DVDs, paintings, photographs or
          any form of digital art or products.
        </p>
        <div className={styles.posters}>
          <img
            src={require("../../img/poster1.jpeg")}
            alt="Game of thrones - Song of ice and fire"
            className={styles.image}
          />
          <img
            src={require("../../img/poster1.jpeg")}
            alt="Game of thrones - Song of ice and fire"
            className={styles.image}
          />
          <img
            src={require("../../img/poster1.jpeg")}
            alt="Game of thrones - Song of ice and fire"
            className={styles.image}
          />
          <img
            src={require("../../img/poster1.jpeg")}
            alt="Game of thrones - Song of ice and fire"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

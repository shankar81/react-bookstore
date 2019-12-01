import React from "react";
import styles from "./Feature.css";

const Feature = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img
            src={require("../../img/poster1.jpeg")}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.heading}>Hemlock Grove a Novel</h1>
          <h3 className={styles.author}>By: Brian McGreevy</h3>
          <p className={styles.para}>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine..
          </p>
          <a href="" className={styles.btn}>
            $ 7.50 BUY BOOK
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <svg className={styles.icon}>
            <use href="../assets/icons/landing-icons.svg#book" />
          </svg>
          <h3 className={styles.text}>
            Select bettwen awide range of texbook and media.
          </h3>
        </div>
        <div className={styles.item}>
          <svg className={styles.icon}>
            <use href="../assets/icons/landing-icons.svg#shopping-cart-1" />
          </svg>
          <h3 className={styles.text}>
            Enjoy free shipping and our fast delivery service.
          </h3>
        </div>
        <div className={styles.item}>
          <svg className={styles.icon}>
            <use href="../assets/icons/landing-icons.svg#portfolio-1" />
          </svg>
          <h3 className={styles.text}>
            Get nice discount on our top rated product every sunday.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import styles from "./Drawer.css";

const Drawer = props => {
  if (props.visible) {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href="../assets/icons/landing-icons.svg#home" />
            </svg>
            <p className={styles.title}>Home</p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href="../assets/icons/landing-icons.svg#book" />
            </svg>
            <p className={styles.title}>Books</p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href="../assets/icons/landing-icons.svg#portfolio-1" />
            </svg>
            <p className={styles.title}>About Us</p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href="../assets/icons/landing-icons.svg#phone-call" />
            </svg>
            <p className={styles.title}>Contact Us</p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href="../assets/icons/landing-icons.svg#clock-circular-outline" />
            </svg>
            <p className={styles.title}>Log In</p>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Drawer;

import React, { Component } from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <svg className={styles.drawerIcon}>
              <use href="../assets/icons/landing-icons.svg#menu-1" />
            </svg>
            <Link to="/" className={styles.brand}>
              <h1 className={styles.title}>Pustaka</h1>
              <h2 className={styles.subtitle}>just another tokomo site</h2>
            </Link>
          </div>
          <div className={styles.searchContainer}>
            <input
              placeholder="Type to search and hit enter"
              type="text"
              className={styles.formInput}
            />
            <div className={styles.bottomLine} />
            <div className={styles.searchIconContainer}>
              <svg className={styles.searchIcon}>
                <use href="../assets/icons/landing-icons.svg#magnifying-glass" />
              </svg>
            </div>
          </div>
          <Link to="login" className={styles.link}>Log In</Link>
          <Link to="register" className={styles.link}>Cart</Link>
        </div>
      </div>
    );
  }
}

export default Header;

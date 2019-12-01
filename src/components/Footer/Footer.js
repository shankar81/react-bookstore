import React from "react";
import styles from "./Footer.css";
import FancyHeader from "../FancyHeader/FancyHeader";
import FooterList from "../FooterList/FooterList";

const Footer = () => {
  const lists = [
    {
      heading: "Information",
      items: [
        { name: "About Us" },
        { name: "Customer Service" },
        { name: "Privacy Policy" },
        { name: "Site Map" },
        { name: "Contact Us" }
      ]
    },
    {
      heading: "Why buy from us",
      items: [
        { name: "Skipping and Returns" },
        { name: "Secure Shopping" },
        { name: "International Shopping" }
      ]
    },
    {
      heading: "My Account",
      items: [
        { name: "Sign In" },
        { name: "View Cart" },
        { name: "My Whishlist" },
        { name: "Track My Order" },
        { name: "Help" }
      ]
    }
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pustaka</h1>
      <div className={styles.content}>
        <div className={styles.newsLetter}>
          <div className={styles.headingContainer}>
            <FancyHeader type="large" title="Newsletter Signup" />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Your email address"
              className={styles.formInput}
            />
            <div className={styles.btnContainer}>
              <a href="" className={styles.formBtn}>
                Sign up
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.navigations}>
            {lists.map((el, index) => {
              return (
                <FooterList
                  key={index}
                  listHeading={el.heading}
                  items={el.items}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

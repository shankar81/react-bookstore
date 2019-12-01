import React from "react";
import FancyHeader from "../FancyHeader/FancyHeader";
import styles from "./FooterList.css";

const FooterList = props => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.headingContainer}>
        <FancyHeader title={props.listHeading} type="small" />
      </div>
      <ul className={styles.list}>
        {props.items.map((el, index) => {
          return (
            <li key={index} className={styles.item}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterList;

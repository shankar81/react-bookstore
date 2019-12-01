import React from "react";
import styles from "./FancyHeader.css";
import classnames from "classnames";

const FancyHeader = props => {
  let type = styles.large;
  if (props.type === "small") {
    type = styles.small;
  }
  return (
    <div className="">
      <h1 className={classnames(styles.fancyHeading, type)}>{props.title}</h1>
      <div className={styles.headingBottom}></div>
    </div>
  );
};

export default FancyHeader;

import React from "react";
import styles from "./Backdrop.css";

const Backdrop = props => {
  if (props.visible) {
    return <div onClick={props.onPress} className={styles.container} />;
  } else {
    return null;
  }
};

export default Backdrop;

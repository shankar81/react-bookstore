import React from "react";
import styles from "./DrawerIcon.css";

const DrawerIcon = props => {
  let line1Class = styles.line1;
  let line2Class = styles.line2;
  let line3Class = styles.line3;

  if (props.visible) {
    line1Class = styles.line1Active;
    line2Class = styles.line2Active;
    line3Class = styles.line3Active;
  }

  return (
    <div onClick={props.onPress} className={styles.container}>
      <div className={line1Class} />
      <div className={line2Class} />
      <div className={line3Class} />
    </div>
  );
};

export default DrawerIcon;

// 50
// 7 5
// 6 -5

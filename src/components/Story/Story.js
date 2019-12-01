import React from "react";
import styles from "./Story.css";

const Story = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>The story</h1>
      <div className={styles.headingBorder} />
      <div className={styles.top}>
        <div className={styles.left}>
          <h1 className={styles.storyHeading}>Go on a journey</h1>
          <p className={styles.para1}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img
              src={require("../../img/story1.jpg")}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img
              src={require("../../img/story2.jpg")}
              alt=""
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.left}>
          <h1 className={styles.storyHeading2}>Overview of Book</h1>
          <p className={styles.para2}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;

import React from "react";
import styles from "./About.module.css";
import image1 from "../../assets/images/Mario and Adrian A.jpg";
import image2 from "../../assets/images/restaurant chef B.jpg";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.about}>
        <h2>About us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <h3>Little Lemon</h3>
            <p>Chicago</p>
            <p>
              Founded by brothers Mario and Adrian, Little Lemon brings the
              vibrant flavors of Southern Europe to your table. From our cozy
              atmosphere to our handcrafted dishes, every detail reflects our
              passion for warm hospitality and delicious food.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <img src={image2} alt="" />
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

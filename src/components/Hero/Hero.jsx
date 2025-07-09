import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/heroImage.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className={styles.heroSetion}>
      <div className={styles.hero}>
        <div className={styles.heroTextContent}>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p className={styles.desc}>
            A family-owned Mediterranean bistro located in the heart of Chicago.
            At Little Lemon, we serve fresh, flavorful dishes.
          </p>
          <div className={styles.heroLinks}>
            <Link to="/reservations" aria-label="Reserve a table at Little Lemon">Reserve a table</Link>
            <Link href="/order" aria-label="Order food online from Little Lemon">Order online</Link>
          </div>
        </div>

        <div className={styles.heroImgContainer}>
          <img src={heroImage} alt="A fresh Mediterranean dish served at Little Lemon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import styles from "./Specials.module.css";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import dishIcon from "../../assets/images/Dish icon.svg";
import { Link } from "react-router";

const Specials = () => {
  return (
    <section className={styles.specialsSection}>
      <div className={styles.specials}>
        <div className={styles.specialsHeader}>
          <h2>This weekly Specials</h2>
          <Link to="/menu">
            <img src={dishIcon} alt="" width={20} height={20} />
            Online menu
          </Link>
        </div>
        <ProductCarousel />
      </div>
    </section>
  );
};

export default Specials;

import React from "react";
import styles from "./Breadcrumb.module.css";
import homeIcon from "../../assets/images/home icon.svg";
import { Link } from "react-router";
const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/">
            <img src={homeIcon} alt="" /> Home
          </Link>
        </li>
        <li className={`${styles.breadcrumbItem} ${styles.active}`}>Reservations</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;

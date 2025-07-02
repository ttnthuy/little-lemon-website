import React from "react";
import secondLogo from "../../assets/images/secondaryLogo.png";
import styles from "./Footer.module.css";
import { mobileNav } from "../../data/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <section className={styles.footerTop}>
          <Link to="/">
            <img src={secondLogo} alt="logo" />
          </Link>

          <div className={styles.footerList}>
            <div className={styles.listItem}>
              <h3>Doormat</h3>
              <ul>
                {mobileNav.map((navItem) => (
                  <li key={navItem.id}>
                    <NavLink to={navItem.href}>{navItem.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.listItem}>
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="/">Address</a>
                </li>
                <li>
                  <a href="/">Phone Number</a>
                </li>
                <li>
                  <a href="/">Email</a>
                </li>
              </ul>
            </div>

            <div className={styles.listItem}>
              <h3>Social media</h3>
              <ul>
                <li>
                  <a href="/">
                    <abbr title="Facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </abbr>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <abbr title="X">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </abbr>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <abbr title="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </abbr>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.listItem}>
              <h3>Subscribe us</h3>
              <p>
                Subscribe to our newsletter to stay up to date with the latest
                news and offers
              </p>
              <form action="" className={styles.footerForm}>
                <label htmlFor="footerEmail" className="sr-only">
                  Email
                </label>
                <input type="email" placeholder="Enter your email address" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <hr />

        <section className={styles.footerBottom}>
          <p>© 2025 Little Lemon. All rights reserved.</p>
          <div className={styles.policy}>
            <a href="/">Term of Uses</a>
            <hr />
            <a href="/">Privacy Policy</a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

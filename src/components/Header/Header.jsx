import React, { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import cart from "../../assets/images/Basket.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { desktopNav, mobileNav } from "../../data/nav";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul className={styles.navItems}>
          {desktopNav.map((navItem) => (
            <li key={navItem.id}>
              <NavLink to={navItem.href}>{navItem.name}</NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.subnav}>
          <Link to="/cart" aria-label="View shopping cart">
            <img src={cart} alt="open cart" />
          </Link>
          <a href="/" aria-label="Login to your account">
            Login
          </a>
        </div>

        <button
          className={styles.toggleButton}
          onClick={handleToggleButton}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          <FontAwesomeIcon icon={isOpen ? faClose : faBars} size="2x" />
        </button>

        {isOpen && (
          <ul
            className={styles.dropdownMenu}
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {mobileNav.map((navItem) => (
              <li key={navItem.id} onClick={handleToggleButton}>
                <NavLink to={navItem.href}>{navItem.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

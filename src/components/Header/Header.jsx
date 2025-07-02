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
          <Link to="/cart">
            <img src={cart} alt="open cart" />
          </Link>
          <a href="/">Login</a>
        </div>

        <button className={styles.toggleButton} onClick={handleToggleButton}>
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>

        {isOpen && (
          <ul className={styles.dropdownMenu}>
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

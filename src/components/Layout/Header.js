import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./styles.scss";

function Header() {
  const [showNav, setShowNav] = useState(true);
  
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} className="img-logo" alt="logo" />
        </Link>
        <span
          className="toggler"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          {showNav ? <FaBars /> : <MdClose />}
        </span>

        <div className={`${showNav ? " dropdown " : " "} navbar__right `}>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

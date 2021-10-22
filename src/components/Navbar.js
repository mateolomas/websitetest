import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaBeer className="navbar-icon" />
              My School
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/students"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/professors"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Professors
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign UP</Button>
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle='btn-outline' buttonSize="btn--mobile">SIGN UP</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

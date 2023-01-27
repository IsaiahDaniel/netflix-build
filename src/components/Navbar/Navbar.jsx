import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/visibility/visibilitySlice";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav className={`nav ${showNav && "nav__black"}`}>
      <div className="nav__wrapper">
        <Link to="/">
          <div className="nav__logo">
            <img src={require("../../assets/netflix-logo.png")} alt="logo" />
          </div>
        </Link>
        {pathname === "/login" ? (
          <div className="nav__button" onClick={() => dispatch(toggle())}>
            <Button>
              Sign In
            </Button>
          </div>
        ) : (
          <div className="nav__avatar">
            <Link to="/profile">
              <img
                src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
                alt=""
              />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

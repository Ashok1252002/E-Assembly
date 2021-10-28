import React from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
// import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left">
          <img
            class="logo-image"
            src="https://res.cloudinary.com/drenxtuen/image/upload/v1635351826/HAL/Brand%20Icon/Green_fork_leaf_food_restaurant_logo_1_n0xnrz.svg"
            alt="Logo"
            className="logo"
          />
          <ul className="menu-items">
            <li>Pastry</li>
            <li>Beverages</li>
            <li>Pasta</li>
            <li>Chinese</li>
            {/* <span className="arrow-dropdown">
              <AiFillCaretDown />
            </span> */}
            <li>Salads</li>
          </ul>
        </div>
        <div className="right">
          <BsSearch className="search" />
          <div className="language">
            {/* <BsGlobe className="globe" /> */}
            {/* <span className="language-name">EN</span> */}
            {/* <span className="lang-arrow-dropdown">
              <AiFillCaretDown />
            </span> */}
          </div>
          <div className="btn">
            <div className="sign-in-btn">Sign In</div>
            <button className="subscribe-btn">Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

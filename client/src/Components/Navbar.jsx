import "./Navbar.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";

const data = [
  { country: "Delhi", id: 1 },
  { country: "Jaipur", id: 2 },
  { country: "Noida", id: 3 },
  { country: "Gurugaon", id: 4 },
  { country: "Pune", id: 5 },
  { country: "Mumbai", id: 6 },
  { country: "Chandigad", id: 7 },
  { country: "Mohali", id: 8 },
  { country: "Banguluru", id: 9 },
];

function Navbar() {
  const [option] = useState(data);

  return (
    <div className="header">
      <div className="first-row">
        <img src={`./icons/Vector.png`} className="logo" alt="" />
        <div className="location">
          <img src={`./icons/location.svg`} alt="" />
          <div className="option">
            <Multiselect options={option} displayValue="country" />
          </div>
          <img src={`./icons/down.svg`} alt="" />
        </div>
        <div className="search">
          <div className="categories">
            <p>All Categories</p>
            <img src={`./icons/down.svg`} alt="" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Search for Cars,Mobile Phones and more"
          />
          <div className="searchBar">
            <img src={`./icons/searchIcon.svg`} className="searchIcon" alt="" />
          </div>
        </div>
      </div>
      <div className="secound-row">
        <div className="login">
          <p className="loginText">Login</p>
        </div>
        <div className="startSelling">
          <p className="seelingText">Start Selling</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

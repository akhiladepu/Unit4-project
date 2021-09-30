import "./Navbar.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

  const options = [
    `All Categories`,'India', 'Russia', 'USA','China'
  ];
  const defaultOption = options[0];

  return (
    <div className="header">
      <img src={`/NavbarImages/olx.svg`} className="logo" alt="" />
        <div className="location">
            <img src={`/NavbarImages/location.svg`} alt="" />
                All India
            <div className="downArrowKey"><img src={`/NavbarImages/down.svg`} alt="" /></div>
        </div>
        <div className="search">
                <div >
                <Dropdown className="categories " options={options}  value={defaultOption} placeholder="Select an option" />
                </div>
                <div><input
                type="text"
                className="input"
                  placeholder="Search for Cars,Mobile Phones and more"
                /></div>
                <div className="searchBar">
                      <img src={`/NavbarImages/searchIcon.svg`} className="searchIcon" alt="" />
                </div>
          </div>
          <div className="loginAndSellingbox">
        <div className="login">Login</div>
        <div className="startSelling">Start Selling</div>
        </div>
    </div>
  );
}

export default Navbar;

// {<div className="header">
// <div className="first-col">
//   <img src={`/NavbarImages/olx.svg`} className="logo" alt="" />
//   <div className="location">
//     <img src={`/NavbarImages/location.svg`} alt="" />
//     <div className="option">
//       <select options={option} displayValue="country" />
//     </div>
//     <img src={`/NavbarImages/down.svg`} alt="" />
//   </div>
//   <div className="search">
//     <div className="categories">
//       <p>All Categories</p>
//       <img src={`/NavbarImages/down.svg`} alt="" />
//     </div>
//     <input
//       type="text"
//       className="input"
//       placeholder="Search for Cars,Mobile Phones and more"
//     />
//     <div className="searchBar">
//       <img src={`/NavbarImages/searchIcon.svg`} className="searchIcon" alt="" />
//     </div>
//   </div>
// </div>
// <div className="secound-col">
//   <div className="login">
//     <p className="loginText">Login</p>
//   </div>
//   <div className="startSelling">
//     <p className="seelingText">Start Selling</p>
//   </div>
// </div>
// </div>}

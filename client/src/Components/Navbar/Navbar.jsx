import "./Navbar.css";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Navbar() {
  const [product,setProduct]=useState()
  const [searchedProducts,setSearchedProducts]=useState([])

  const locations=[`All India`,`Delhi`,`Mumbai`,`Kolkata`,`hyderabad`,`Chennai`]

  const countries = [
    `All Categories`,'Electronics & appliances', 'Properties', 'Mobile & Tablets',
    'Commercial Vehicles & spares',`Books,Sports & Hobbies`
  ];
  useEffect(()=>{
    search()
  },[])
  var element;
  var arr;
  
  var p1,p2,p3;
  var a
const search=()=>{
  axios.get(`http://localhost:3005/Cars`)
  .then((res)=>{
    arr=res.data
console.log(arr)
    a=[]
    for(let i=0;i<arr.length;i++){
       element=arr[i].productName.split(" ")
      p1=element[0].toLowerCase()
      if(p1===product){
        a.push(arr[i])
      }
    }
    if(product==="cars"){
      a=arr
    }
   setSearchedProducts([...a])
})
axios.get(`http://localhost:3005/Laptops`)
  .then((res)=>{
    arr=res.data
console.log(arr)
    for(let i=0;i<arr.length;i++){
       element=arr[i].productName.split(" ")
      p1=element[0].toLowerCase()
      if(p1===product){
        a.push(arr[i])
      }
    }
    if(product==="laptops"){
      a=arr
    }
   setSearchedProducts([...a])
})
axios.get(`http://localhost:3005/Mobiles`)
  .then((res)=>{
    arr=res.data
console.log(arr)
    for(let i=0;i<arr.length;i++){
       element=arr[i].productName.split(" ")
      p1=element[0].toLowerCase()
      if(p1===product){
        a.push(arr[i])
      }
    }
    if(product==="mobiles"){
      a=arr
    }
   setSearchedProducts([...a])
})
axios.get(`http://localhost:3005/Bikes`)
  .then((res)=>{
    arr=res.data
console.log(arr)
    for(let i=0;i<arr.length;i++){
       element=arr[i].productName.split(" ")
      p1=element[0].toLowerCase()
      if(p1===product){
        a.push(arr[i])
      }
    }
    if(product==="bikes"){
      a=arr
    }
   setSearchedProducts([...a])
})
}


  return (
    <>
    <div className="header">
      <img src={`/NavbarImages/olx.svg`} className="logo" alt="" />
      <div className="locationlogo"><img src={`/NavbarImages/location.svg`} alt="" /></div>
        <select className="location">
            
              {
                locations.map(el=>(
                  <option className="options" title={el}>{el}</option>
                ))
              }
        </select>
        <div className="search">
                <div >
                <select className="categories">
                {
                  countries.map(el=>(
                    <option className="options" title={el}>{el}</option>
                  ))
                }
                </select>
                </div>
                <div><input
                onChange={(e=>setProduct(e.target.value))}
                type="text"
                className="input"
                  placeholder="Search for Cars,Mobile Phones and more"
                /></div>
                <div className="searchBar"
                onClick={search}
                >
                      <img src={`/NavbarImages/searchIcon.svg`} className="searchIcon" alt="" />
                </div>
          </div>
          <div className="loginAndSellingbox">
        <div className="login">Login</div>
        <div className="startSelling">Start Selling</div>
        </div>
       
    </div>
    {
      searchedProducts.map(el=>(
        <p>{el.productName}</p>
      ))
      
    }
    </>
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

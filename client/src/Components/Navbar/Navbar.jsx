import "./Navbar.css";
import axios from "axios"
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Contexts/Logincontextprovider.jsx";

function Navbar() {
  const history = useHistory();
  // const [getUserImage, setUserImage] = useState("");
  const { isLoggedIn, handleLogin, userId } = useContext(LoginContext);
  const [product, setProduct] = useState()
  const [searchedProducts, setSearchedProducts] = useState([])
  const locations = [`All India`, `Delhi`, `Mumbai`, `Kolkata`, `hyderabad`, `Chennai`]
  const items = [
    `All Categories`, 'Electronics & appliances', 'Properties', 'Mobile & Tablets',
    'Commercial Vehicles & spares', `Books,Sports & Hobbies`
  ];
  useEffect(() => {
    search()
  }, [])
  var element;
  var arr;
  var p1, p2, p3;
  var a
  const search = () => {
    axios.get(`http://localhost:3005/Cars`)
      .then((res) => {
        arr = res.data
        console.log(arr)
        a = []
        for (let i = 0; i < arr.length; i++) {
          element = arr[i].productName.split(" ")
          p1 = element[0].toLowerCase()
          if (p1 === product) {
            a.push(arr[i])
          }
        }
        if (product === "cars") {
          a = arr
        }
        setSearchedProducts([...a])
      })
    axios.get(`http://localhost:3005/Laptops`)
      .then((res) => {
        arr = res.data
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          element = arr[i].productName.split(" ")
          p1 = element[0].toLowerCase()
          if (p1 === product) {
            a.push(arr[i])
          }
        }
        if (product === "laptops") {
          a = arr
        }
        setSearchedProducts([...a])
      })
    axios.get(`http://localhost:3005/Mobiles`)
      .then((res) => {
        arr = res.data
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          element = arr[i].productName.split(" ")
          p1 = element[0].toLowerCase()
          if (p1 === product) {
            a.push(arr[i])
          }
        }
        if (product === "mobiles") {
          a = arr
        }
        setSearchedProducts([...a])
      })
    axios.get(`http://localhost:3005/Bikes`)
      .then((res) => {
        arr = res.data
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          element = arr[i].productName.split(" ")
          p1 = element[0].toLowerCase()
          if (p1 === product) {
            a.push(arr[i])
          }
        }
        if (product === "bikes") {
          a = arr
        }
        setSearchedProducts([...a])
      })
  }

  const routeChange = (reqPath) => {
    handleLogin();
    let path = `/${reqPath}`
    history.push(path);
  }

  

  
  return (
    <>
    <div className="header1">
      <img src={`/NavbarImages/olx.svg`} className="logo" alt="" />
      <img className="locationlogo" src={`/NavbarImages/location.svg`} alt="" />
      <select className="locations">
              {
                locations.map(el=>(
                  <option className="options" title={el}>{el}</option>
                ))
              }
      </select>
      <select className="categories">
              {
                items.map(el=>(
                  <option className="options" title={el}>{el}</option>
                ))
              }
      </select>
      <input
        onChange={(e=>setProduct(e.target.value))}
        type="text"
        className="input"
          placeholder="Search for Cars,Mobile Phones and more"
        />
      <img src={`/NavbarImages/search.svg`} className="searchIcon" alt="" />
{isLoggedIn ?<img className="profile1" src="/NavbarImages/profile.png" alt=""></img>
        :<div className="login" onClick={ ()=>{routeChange("Continueoptions")}}>Login</div>}
        <div className="startSelling" onClick={() => { routeChange("postyourad") }}>Start Selling</div>
    </div>
    
    </>
  );
}
export default Navbar;
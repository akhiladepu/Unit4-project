import "./Selectcategory.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../../Contexts/Logincontextprovider";
import { useHistory } from "react-router";


export function Selectcategory(){

  
  const history = useHistory();

  const { category, setCategory } = useContext(LoginContext);

  const routeChange = () => {
    let path = `/postyourad`
    history.push(path);
  }

    return <div>
    <nav className="navbar">
        <div className="navDiv">
          <div className="navImage">
            <img
              src={`./icons/backArrow.svg`}
              className="backArrow"
              alt="arrow"
            />
            <img src={`./icons/olxLogo.svg`} className="olxLogo" alt="logo" />
          </div>
          <div>
            <img src={`./icons/PostYourAd.svg`} alt="" />
          </div>
        </div>
      </nav>
      <img className="category1" src={`./PostAdImages/chooseAcategory.svg`} alt="" />

      {/* <Link to="/postingAnotherAd">  */}
        <img onClick={() => { setCategory("cars"); routeChange() }}
      className="car" src={`./PostAdImages/car.svg`} alt="" />
      {/* </Link> */}

      {/* <Link to="/postingAnotherAd">  */}
      <img onClick={()=>{setCategory("cars"); routeChange()}}className="propertiy" src={`./PostAdImages/propertiy.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img onClick={()=>{setCategory("mobiles"); routeChange()}} className="mobiles" src={`./PostAdImages/mobiles.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img onClick={()=>{setCategory("mobiles"); routeChange()}} className="furniture" src={`./PostAdImages/furniture.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img onClick={()=>{setCategory("laptops"); routeChange()}} className="vehicle" src={`./PostAdImages/vehicle.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img  onClick={()=>{setCategory("laptops"); routeChange()}} className="application" src={`./PostAdImages/application.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img onClick={()=>{setCategory("bikes"); routeChange()}} className="fashion" src={`./PostAdImages/fashion.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img onClick={()=>{setCategory("bikes"); routeChange()}} className="books" src={`./PostAdImages/books.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img className="whole" src={`./PostAdImages/wholeImage.svg`} alt="" />
      {/* // </Link> */}

      {/* <Link to="/postingAnotherAd"> */}
      <img className="footer2" src={`./PostAdImages/postAdFooter.svg`} alt="" />
      {/* // </Link> */}
    </div>
}
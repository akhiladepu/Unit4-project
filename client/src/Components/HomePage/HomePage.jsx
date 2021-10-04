import "./HomePage.css";
import Navbar from "../Navbar/Navbar.jsx"
import Footer from "../Footer/Footer.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import {LoginContext} from "../../Contexts/Logincontextprovider"
import { useHistory } from "react-router-dom";
        
let moreOnCars = [];
let topPicsForYou = [];
let freshRecommendations = [];
        
export const HomePage = () => {

    const history = useHistory();

    const { isLoggedIn, handleProductId } = useContext(LoginContext)

    const [appData, setAppData] = useState([]);

    useEffect(() => {
        
        moreOnCars = [];
        topPicsForYou = [];
        freshRecommendations = [];

        getProducts();

    }, []);

    const getProducts = async () => {

        let fetchedData = [];
        
        await axios("http://localhost:4000/cars").then((data) => {
            fetchedData = [...fetchedData, ...data.data];
        })
        
        await axios("http://localhost:4000/bikes").then((data) => {
            fetchedData = [...fetchedData, ...data.data];
        })
        
        await axios("http://localhost:4000/laptops").then((data) => {
            fetchedData = [...fetchedData, ...data.data];
        })
        
        await axios("http://localhost:4000/mobiles").then((data) => {
            fetchedData = [...fetchedData, ...data.data];
        })

        for (let i = 0; i < 4; i++) {
            moreOnCars.push(fetchedData[Math.floor(Math.random() * fetchedData.length)]);
            topPicsForYou.push(fetchedData[Math.floor(Math.random() * fetchedData.length)]);
        }

        for (let i = 0; i < 12; i++) {
            freshRecommendations.push(fetchedData[Math.floor(Math.random() * fetchedData.length)]);
        }

        setAppData(fetchedData);

    }

    const routeChange = () => {
        let path = '/viewyourad';
        history.push(path)
    }
    
    return appData.length === 0 ? <></> : (<div style={{ display: "block", position:"absolute", zIndex:"1"}}>
        <Navbar/>
        <div>
            <img className="frameDescription" style={{marginTop:"84px"}}src={ `/SVGComponents/Homepage/Component0/FrameDescription.svg`} alt=""/>
        </div>
        <div style={{display:"", height:"403px"}}>
            <img className="mainImage" src={`/SVGComponents/Homepage/Component1/Final SVG.svg`} alt="" />
            <img className="mainHead" src={`/SVGComponents/Homepage/Component1/Now, Buy and Sell Cars directly with OLX Autos.svg`} alt="" />
            <img onClick={ ()=>{console.log("Buy Car Button Clicked")}} className="mainButtonBuyCar" src={`/SVGComponents/Homepage/Component1/ButtonsBuyCar.svg`} alt="" />
            <img onClick={ ()=>{console.log("Sell Car Button Clicked")}} className="mainButtonSellCar" src={`/SVGComponents/Homepage/Component1/ButtonsSellCar.svg`} alt="" />
        </div>
        <div className="moreOnCars">
            <div className="moreOnCarsHead">
                <img src={`/SVGComponents/Homepage/Component2/More on Cars.svg`} alt=""/>
            </div>
            <div className="moreOnCarsProducts">
                {moreOnCars.map((el) => {
                    return (<>
                        <div key={ el._id} className="displayProductComponent" onClick={() => { handleProductId(el._id); routeChange() }}>
                            <img className="displayProductComponentImage" src={`${el.productImages[0]}`} alt="" />
                            {el.featured ? <img className="displayProductComponentFeatured" src={ `/SVGComponents/Homepage/Component2/Featured.svg`} alt=""/>:<></>}
                            {el.wishlisted ? <img className="displayProductComponentWishlistIcon" src={`/SVGComponents/Homepage/Component2/wishlisted.svg`} alt="" onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>:<img className="displayProductComponentWishlistIcon" src={ `/SVGComponents/Homepage/Component2/notWishlisted.svg`} alt=""  onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>}
                            <img src={`/SVGComponents/Homepage/Component2/rupeesSymbol.svg`} className="displayProductComponentRupeesSymbol" alt="" />
                            <div className="displayProductComponentPrice">{el.price}</div>
                            <div className="displayProductComponentPostedOn">{ el.postedOn}</div>
                            <div className="displayProductComponentName">{el.productName}</div>
                            <div className="displayProductComponentLocation">{el.location}</div>
                        </div>
                    </>);
                })}
            </div>
        </div>
        <div className="topPicsForYou">
            <div className="topPicsForYouHead">
                {isLoggedIn ? <img src={`/NavbarImages/basedonsearch.svg`} alt="" /> : <img src={`/SVGComponents/Homepage/Component3/Top picks for you.svg`} alt="" />}
            </div>
            <div className="topPicsForYouProducts">
                {topPicsForYou.map((el) => {
                    return (<>
                        <div key={ el._id} className="displayProductComponent" onClick={() => { handleProductId(el._id); routeChange() }}>
                            <img className="displayProductComponentImage" src={`${el.productImages[0]}`} alt="" />
                            {el.featured ? <img className="displayProductComponentFeatured" src={ `/SVGComponents/Homepage/Component2/Featured.svg`} alt=""/>:<></>}
                            {el.wishlisted ? <img className="displayProductComponentWishlistIcon" src={`/SVGComponents/Homepage/Component2/wishlisted.svg`} alt="" onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>:<img className="displayProductComponentWishlistIcon" src={ `/SVGComponents/Homepage/Component2/notWishlisted.svg`} alt=""  onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>}
                            <img src={`/SVGComponents/Homepage/Component2/rupeesSymbol.svg`} className="displayProductComponentRupeesSymbol" alt="" />
                            <div className="displayProductComponentPrice">{el.price}</div>
                            <div className="displayProductComponentPostedOn">{ el.postedOn}</div>
                            <div className="displayProductComponentName">{el.productName}</div>
                            <div className="displayProductComponentLocation">{el.location}</div>
                        </div>
                    </>);
                })}
            </div>
        </div>
        <div className="FreshRecommendations">
            <div className="FreshRecommendationsHead">
                <img src={`/SVGComponents/Homepage/Component4/Fresh Recommendations.svg`} alt=""/>
            </div>
            <div className="FreshRecommendationsProducts">
                {freshRecommendations.map((el) => {
                    return (<>
                        <div key={ el._id} className="displayProductComponent" onClick={() => { handleProductId(el._id); routeChange() }}>
                            <img className="displayProductComponentImage" src={`${el.productImages[0]}`} alt="" />
                            {el.featured ? <img className="displayProductComponentFeatured" src={`/SVGComponents/Homepage/Component2/Featured.svg`} alt="" /> : <></>}
                            {el.wishlisted ? <img className="displayProductComponentWishlistIcon" src={`/SVGComponents/Homepage/Component2/wishlisted.svg`} alt="" onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>:<img className="displayProductComponentWishlistIcon" src={ `/SVGComponents/Homepage/Component2/notWishlisted.svg`} alt=""  onClick={(clickEvent) => { clickEvent.stopPropagation(); console.log("wishlistIcon Clicked")}}/>}
                            <img src={`/SVGComponents/Homepage/Component2/rupeesSymbol.svg`} className="displayProductComponentRupeesSymbol" alt="" />
                            <div className="displayProductComponentPrice">{el.price}</div>
                            <div className="displayProductComponentPostedOn">{el.postedOn}</div>
                            <div className="displayProductComponentName">{el.productName}</div>
                            <div className="displayProductComponentLocation">{el.location}</div>
                        </div>
                    </>);
                })}
            </div>
            <img className="loadMoreButton" src={ `/SVGComponents/Homepage/Component4/LoadmoreButton.svg`} alt=""/>
        </div>
        <Footer/>
    </div>);
}
import "./HomePage.css";
import data from "../../database.json"

export const HomePage = () => {

    let moreOnCars = [];
    let topPicsForYou = [];
    let freshRecommendations = [];
    for (let i = 0; i < 4; i++){
        moreOnCars.push(data.Cars[i]);
        topPicsForYou.push(data.Cars[4 + i]);
    }

    freshRecommendations = data.Cars.slice(0, 12);
    
    return (<div style={{ display: "block" }}>
        <div>
            <img className="frameDescription" src={ `/SVGComponents/Homepage/Component0/FrameDescription.svg`} alt=""/>
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
                        <div className="displayProductComponent" onClick={() => { console.log(el) }}>
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
                <img src={`/SVGComponents/Homepage/Component3/Top picks for you.svg`} alt=""/>
            </div>
            <div className="topPicsForYouProducts">
                {topPicsForYou.map((el) => {
                    return (<>
                        <div className="displayProductComponent" onClick={() => { console.log(el) }}>
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
                        <div className="displayProductComponent" onClick={() => { console.log(el) }}>
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
    </div>);
}
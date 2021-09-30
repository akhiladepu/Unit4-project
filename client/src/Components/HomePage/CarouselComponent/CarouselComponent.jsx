import Carousel from "react-elastic-carousel";
import data from "../HomePage.json";
import styled from "styled-components";



export const CarouselComponent = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const Item = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 250px;
        width: 100%;
        background-color: #00008B;
        color: #fff;
        margin: 0 15px;
        font-size: 4em;
    `;

    let moreOnCars = [];
    let topPicsForYou = [];

    for (let i = 0; i < 4; i++){
        moreOnCars.push(data.cars[i]);
        console.log('moreOnCars:', moreOnCars)
        topPicsForYou.push(data.cars[4 + i]);
        console.log('topPicsForYou:', topPicsForYou)
    }

  return (<>
      <div className="carousel">
          <Carousel breakPoints={breakPoints}>
              {moreOnCars.map((el) => {
                    return (<Item>
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
                    </Item>);
                })}
        </Carousel>
      </div>
      <div className="carousel">
          <Carousel breakPoints={breakPoints}>
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
        </Carousel>
      </div>
    </>);
}

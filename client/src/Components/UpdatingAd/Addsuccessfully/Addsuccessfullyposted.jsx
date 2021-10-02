import "./Addsuccessfullyposted.css"
import {Link, useHistory} from "react-router-dom"
import { useContext } from "react";
import {LoginContext} from "../../../Contexts/Logincontextprovider"

export function Addsuccessfullyposted() {

    const history = useHistory();

    const routeChange = () => {
        let path = '/';
        history.push(path)
    }

    const {category} = useContext(LoginContext)

    const showProduct = () => {
        let path = "/viewyourad";
        history.push(path)
    }

    return<div className="container">
        <img className="x" src={`/LoginImages/x.svg`} alt="1" onClick={()=>{routeChange()}}/>
   <div className="overAllDiv">
                    
                        <img className="ellipse" src={ `/PaymentSuccessful/Ellipse.svg`} alt="1" />
                        <img className="checkMark" src={ `/PaymentSuccessful/checkMark.svg`} alt="1" />
                    <img className="star1" src={ `/PaymentSuccessful/Star 1.svg`} alt="1" />
                    <img className="star2" src={ `/PaymentSuccessful/Star 2.svg`} alt="2" />
                    <img className="star3" src={ `/PaymentSuccessful/Star 3.svg`} alt="3" />
                    <img className="star4" src={ `/PaymentSuccessful/Star 4.svg`} alt="4" />
                    <img className="star5" src={ `/PaymentSuccessful/Star 5.svg`} alt="5" />

               </div>
    <div className="congo">CONGRATULATIONS</div>
<div className="live">Your ad will go live shortly</div>
   <Link to="/postingAnotherAd"><div className="posts">Post Another Ad</div></Link> 
        <div className="view" onClick={()=>{showProduct()}}>View Your Ad</div>
        <div className="bottomtext"><img className="iCompo" src={`/PaymentSuccessful/i.svg`} alt="" />OLX allows 1 free ad in 30 days for <span>{category}</span></div>
    
    </div>
}
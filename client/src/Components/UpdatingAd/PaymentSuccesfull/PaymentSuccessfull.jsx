import "./PaymentSuccessfull.css"
import {Link, Redirect} from "react-router-dom"
import { Updatingad } from "../Updating/Updatingad"
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {LoginContext} from "../../../Contexts/Logincontextprovider"

export function PaymentSuccessfull(){

    const { category } = useContext(LoginContext);

    const history = useHistory();
    const [change, setChange] = useState(false);

    const routeChange1 = () => {
        let path = '/';
        history.push(path)
    }
    
    useEffect(()=>{
        handleChange()
    },[])
    const handleChange=()=>{
        setTimeout(() => {
          setChange(true)
         }, 1000);
    }
    
    const routeChange = () => {
        let path = '/selectcategory';
        history.push(path)
    }

    return<><div className="container">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" onClick={()=>{routeChange1()}} />
    <div className="overAllDiv">
                    
                    <img className="ellipse" src={ `/PaymentSuccessful/Ellipse.svg`} alt="1" />
                    <img className="checkMark" src={ `/PaymentSuccessful/checkMark.svg`} alt="1" />
                    <img className="star1" src={ `/PaymentSuccessful/Star 1.svg`} alt="1" />
                    <img className="star2" src={ `/PaymentSuccessful/Star 2.svg`} alt="2" />
                    <img className="star3" src={ `/PaymentSuccessful/Star 3.svg`} alt="3" />
                    <img className="star4" src={ `/PaymentSuccessful/Star 4.svg`} alt="4" />
                    <img className="star5" src={ `/PaymentSuccessful/Star 5.svg`} alt="5" />

               </div>
    <div className="congo">Payment Successfull</div>
    <div className="live">You can post a second ad now...</div>
   <div className="post" onClick={()=>{routeChange()}}>Post Another Ad</div>
    <div className="bottomtext">
    <img className="i" src={ `/PaymentSuccessful/i.svg`} alt="i" />
    OLX allows 1 free ad in 30 days for <span>{category}</span></div>
    
    </div>
    
    </>
}
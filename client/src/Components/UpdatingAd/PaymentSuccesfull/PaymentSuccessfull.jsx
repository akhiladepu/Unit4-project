import "./PaymentSuccessfull.css"
import {Link, Redirect} from "react-router-dom"
import { Updatingad } from "../Updating/Updatingad"
import {useState,useEffect} from "react"
export function PaymentSuccessfull(){
    const [change,setChange]=useState(false)
    
    useEffect(()=>{
        handleChange()
    },[])
    const handleChange=()=>{
        setTimeout(() => {
          setChange(true)
         }, 1000);
      }
    return<><div className="container">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" />
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
   <div className="post">Post Another Ad</div>
    <div className="bottomtext">
    <img className="i" src={ `/PaymentSuccessful/i.svg`} alt="i" />
    olx allows 1 free ad in 30 days for <span>Cameras</span></div>
    
    </div>
    
    </>
}
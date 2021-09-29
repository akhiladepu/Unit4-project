import "./Continuepage.css"
import {Link} from "react-router-dom"
export function Continueoptions(){
    return <>
    
    <div className="continuepage">
   <div className="closebox"><span id="close"
//    onclick={}
   >x</span></div>

   <div className="guitar">
    <img className="leftarrow" src={`/LoginImages/rightarrow.svg`} alt="left"/>
    <img className="guitar" src={`/LoginImages/loginEntryPointPost.svg`} alt="Car Logo"/>
    <img className="rightarrow" src={`/LoginImages/leftarrow.svg`} alt="right"/>
    </div>
 
    <div className="help">Help make olx safre place to buy and sell</div>
    <div className="dots">
    <div className="dot1"></div>
    <div className="dot2"></div>
    <div className="dot3"></div>
    </div>

    <Link to="/Loginthroughphone">
    <button className="continueWithPhone">
    <img className="phonelogo" src="/LoginImages/phone.svg" alt="phone"></img>
    <span className="phonetext">Continue with phone</span>
    </button>
    </Link>

    <Link to="/Loginthroughphone">
    <button className="continueWithPhone">
    <img className="phonelogo" src="/LoginImages/facebook.svg" alt="phone"></img>
    <span className="phonetext">Continue with facebook</span>
    </button>
    </Link>

    <Link to="/Loginthroughphone">
    <button className="continueWithPhone">
    <img className="phonelogo" src="/LoginImages/google.svg" alt="phone"></img>
    <span className="phonetext">Continue with google</span>
    </button>
    </Link>

    <div className="details">We wont share your personal details with anyone</div>
    <div className="policy">If you continue, you are accepting <span>OLX Terms and Conditions and Privacy Policy</span></div>
    </div>
    </>
}
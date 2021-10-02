import "./Continuepage.css"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function Continueoptions() {

    const history = useHistory();

    const routeChange = () => {
        let path = '/';
        history.push(path)
    }

    return <>
    
    <div className="continuepage">
    
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" onClick={()=>{routeChange()}}/>

   <div className="guitarbox" >
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
    <div className="continueWithPhone">
    <img className="phonelogo" src="/LoginImages/phone.svg" alt="phone"></img>
    <span className="phonetext">Continue with phone</span>
    </div>
    </Link>
    <Link to="/Loginthroughphone">
    <div className="continueWithfb">
    <img className="fblogo" src="/LoginImages/facebook.svg" alt="phone"></img>
    <span className="phonetext">Continue with facebook</span>
    </div>
    </Link>
    <Link to="/Loginthroughphone">
    <div className="continueWithgoogle">
    <img className="googlelogo" src="/LoginImages/google.svg" alt="phone"></img>
    <span className="phonetext">Continue with google</span>
    </div>
    </Link>

    
    <div className="details">We wont share your personal details with anyone</div>
    <div className="policy">If you continue, you are accepting <span>OLX Terms and Conditions and Privacy Policy</span></div>
    
    </div>
    </>
}
// {
//     <div className="help">Help make olx safre place to buy and sell</div>



//     <Link to="/Loginthroughphone">
//     <button className="continueWithPhone">
//     <img className="phonelogo" src="/LoginImages/facebook.svg" alt="phone"></img>
//     <span className="phonetext">Continue with facebook</span>
//     </button>
//     </Link>

//     <Link to="/Loginthroughphone">
//     <button className="continueWithPhone">
//     <img className="phonelogo" src="/LoginImages/google.svg" alt="phone"></img>
//     <span className="phonetext">Continue with google</span>
//     </button>
//     </Link>

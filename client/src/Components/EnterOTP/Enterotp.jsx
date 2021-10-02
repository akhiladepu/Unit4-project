import "./Enterotp.css"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/Logincontextprovider"
import { useHistory } from "react-router"
import axios from "axios";

export function Enterotp() {
    const history = useHistory();

    const routeChange = () => {
        let path = '/';
        history.push(path)
    }
    const {phoneNumber, setUserId, handleLogin, userId, handleUserImage}=useContext(LoginContext)
 
    const [otp,setOtp]=useState(new Array(4).fill(""))
    
    const postUser = async (num) => {
        await axios.post("http://localhost:4000/users", {
            mobile: num
        }).then((data) => {
            setUserId(data.data._id);
            handleUserImage(data.data.image)
            return data;
        }).catch((err) => {
            console.log(err);
        })
    }
    
    
    
    const handleChange = (el, index) => {
        if(isNaN(el.value))return false
        setOtp([...otp.map((d,idx)=>(idx===index)? el.value:d)])
        if(el.nextSibling){
            el.nextSibling.focus()
        }

        if (index === 3) {
            postUser(phoneNumber)
            setTimeout(() => {

                history.push("/");
                
            }, 1200)
        }
    }
    return <>
    <div className="otppage">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" onClick={()=>{routeChange()}}/>
        <img className="olxlogo" src={`/LoginImages/olx.svg`} alt="olxlogo"/>
        <div className="enternumber1">Enter Your received</div>
        <div className="text">We sent a 4-digit code to <span 
        style={{
            fontSize:"16px"
        }}
        >+{phoneNumber}</span></div>
    <div className="row mb-5 mt-3" >
    <div className="otpbox">
    {
        otp.map((el,index)=>{
            return <input
            key={index}
            className="otp-field"
            type="text"
            name="otp"
            maxLength="1"
            value={el}
            onChange={(e)=>handleChange(e.target,index)}
            onFocus={(e)=>e.target.select()}
            ></input>
        })
    }
    </div>
    </div>
     <div className="resend">RESEND CODE BY SMS</div>
     <div className="call">RESEND CODE BY CALL</div>
</div>
    </>
}
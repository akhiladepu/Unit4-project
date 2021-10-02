import "./Enterotp.css"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/Logincontextprovider"
import { useHistory } from "react-router"
export function Enterotp() {
    const history = useHistory();
    const {phoneNumber}=useContext(LoginContext)
    const [otp,setOtp]=useState(new Array(4).fill(""))
    const handleChange=(el,index)=>{
        if(isNaN(el.value))return false
        setOtp([...otp.map((d,idx)=>(idx===index)? el.value:d)])
        if(el.nextSibling){
            el.nextSibling.focus()
        }

        if (index === 3) {
            setTimeout(() => {
                history.push("/");
            }, 1200)
        }
    }
    return <>
    <div className="otppage">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" />
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
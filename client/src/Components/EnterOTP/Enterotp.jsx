import "./Enterotp.css"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/Logincontextprovider"
export function Enterotp(){
    const {phoneNumber}=useContext(LoginContext)
    const [otp,setOtp]=useState(new Array(4).fill(""))

    const handleChange=(el,index)=>{
        if(isNaN(el.value))return false
        setOtp([...otp.map((d,idx)=>(idx===index)? el.value:d)])

        if(el.nextSibling){
            el.nextSibling.focus()
        }
    }

    return <>
    <div className="otppage">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" />
        <div className="olxlogo" ><img src={`/LoginImages/olx.svg`} alt="olxlogo"/></div>
        <div className="enternumber">Enter Your received</div>
        <div className="text">We sent a 4-digit code to <span >+{phoneNumber}</span></div>
        
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
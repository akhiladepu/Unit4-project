import "./Loginthroughphone.css"
import {Link} from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../../Contexts/Logincontextprovider"
export function Loginthroughphone(){
   const {phoneNumber,setPhoneNumber,changeColor,setChangeColor}=useContext(LoginContext)
   const [order,setOrder]=useState(false)

   useEffect(()=>{
      setOrder(true)
   },[order])
  const handleNext=()=>{
     if(phoneNumber.length<10 || phoneNumber.length>10){
        alert("Please enter a valid number.")
     }
     else {
        setChangeColor(false)
        setOrder(true)
     }
  }
    return <>
    <div className="loginpage">
    <img className="x" src={ `/LoginImages/x.svg`} alt="1" />
         <div className="olxlogo" ><img src={`/LoginImages/olx.svg`} alt="olxlogo"/></div>
         <div className="enternumber">Enter Your Number</div>

      <div className="number" >
         <div className="code"><span >+91</span></div>
         <div className="line"> <span ></span></div>
         <input onChange={(e)=>setPhoneNumber(e.target.value)} className="numinput" placeholder="Enter Phone Number"></input>
      </div>

      {order?<Link to="/Enterotp">
         <div className="next1"
         style={{
            background: !changeColor ? "linear-gradient(0deg, #ebeeef, #ebeeef), #ffffff":"linear-gradient(0deg, #002F34, #002F34), #FFFFFF",
            color:!changeColor ? "black":"white"
         }}
         
          onClick={phoneNumber.length===10 ?handleNext:null}
         >Next
         </div>
         </Link>:<div className="next1"
         style={{
            background: !changeColor ? "linear-gradient(0deg, #ebeeef, #ebeeef), #ffffff":"linear-gradient(0deg, #002F34, #002F34), #FFFFFF",
            color:!changeColor ? "black":"white"
         }}
         
          onClick={phoneNumber.length===10 ?handleNext:null}
         >Next
         </div>
      }
         <p>we will never reveal your number to anyone else nor we will use  it to send you spam  </p>
    </div>
    </>
}
// {




//     
     
// <div className="next"
// style={{
//    background: !changeColor ? "linear-gradient(0deg, #ebeeef, #ebeeef), #ffffff":"linear-gradient(0deg, #002F34, #002F34), #FFFFFF",
//    color:!changeColor ? "black":"white"
// }}

//  onClick={phoneNumber.length===10 ?handleNext:null}
// >Next
// </div>
//     
//      <p>we will never reveal your number to anyone else nor we will use  it to send you spam  </p>
// }
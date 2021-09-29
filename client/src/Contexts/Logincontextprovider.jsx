import { createContext } from "react";
import { useState,useEffect } from "react";
export const LoginContext=createContext()

export function Logincontextprovider({children}){

    const [phoneNumber,setPhoneNumber]=useState("")
    const [changeColor,setChangeColor]=useState(false)

 useEffect(()=>{
     if(phoneNumber.length===10)setChangeColor(true)
 },[phoneNumber])

    return <LoginContext.Provider value={{phoneNumber,setPhoneNumber,changeColor,setChangeColor}}>
    {children}
    </LoginContext.Provider>
}

import { Updatingad } from "../Updating/Updatingad"
import { Addsuccessfullyposted } from "../Addsuccessfully/Addsuccessfullyposted"
import { useEffect,useState } from "react"
import { Route } from "react-router-dom"
import AdNotPosted from "../AdNotPosted/AdNotPosted"

export function Postloading(){
    const [change,setChange]=useState(false)

    useEffect(()=>{
        setTimeout(() => {
         setChange(true)
        }, 1000);
    }, [])
    
    return<div>
    <Route path="/postloading" exact>{!change?<Updatingad/>:<Addsuccessfullyposted/>}</Route>{/*after clicking on post ad butto*/}
    <Route path="/postingAnotherAd" exact><AdNotPosted/></Route>
    
    
    </div>
}
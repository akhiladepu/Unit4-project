import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
export const LoginContext = createContext({ isLoggedIn: "", handleLogin: () => { }, userId: "", setUserId: () => { }})

export function Logincontextprovider({children}){

    const [phoneNumber, setPhoneNumber] = useState("");
    const [changeColor, setChangeColor] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");

    const getUsers = async () => {
        await axios("http://localhost/cars").then((data) => {
            console.log(data.data);
        })
    }

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(()=>{
        if (phoneNumber.length === 10)
            setChangeColor(true)
    },[phoneNumber])

    return <LoginContext.Provider value={{phoneNumber,setPhoneNumber,changeColor,setChangeColor, isLoggedIn, handleLogin, userId, setUserId}}>
    {children}
    </LoginContext.Provider>
}
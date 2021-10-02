import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
export const LoginContext = createContext({ isLoggedIn: "", handleLogin: () => { }, userId: "", setUserId: () => { }, handleUserImage: () => { }})

export function Logincontextprovider({children}){

    // const [userImageURL, setUserImageURL] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [changeColor, setChangeColor] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [category,setCategory]=useState("")
    const getUsers = async () => {
        await axios("http://localhost/cars").then((data) => {
            console.log(data.data);
        })
    }

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const handleUserImage = (text) => {
        console.log('text:', text)
        // setUserImageURL(text);
    }

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(()=>{
        if (phoneNumber.length === 10)
            setChangeColor(true)
    },[phoneNumber])

    return <LoginContext.Provider value={{category,setCategory, phoneNumber,setPhoneNumber,changeColor,setChangeColor, isLoggedIn, handleLogin, userId, setUserId, handleUserImage}}>
   {children}
    </LoginContext.Provider>
}
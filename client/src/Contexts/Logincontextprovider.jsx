import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
export const LoginContext = createContext({ isLoggedIn: "", handleLogin: () => { }, userId: "", setUserId: () => { }, handleUserImage: () => { }, handleProductId: () => { }, productId: ""})

export function Logincontextprovider({children}){

    // const [userImageURL, setUserImageURL] = useState("");
    const [productId, setProductId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [changeColor, setChangeColor] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("61591eeb10458c0d64c9be6e");
    const [category, setCategory] = useState("cars");
    // const getUsers = async () => {
    //     await axios("http://localhost/cars").then((data) => {
    //         console.log(data.data);
    //     })
    // }

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    const handleUserImage = (text) => {
        // console.log('text:', text)
        // setUserImageURL(text);
    }

    const handleProductId = (id) => {
        // console.log(id)
        setProductId(id);
    }

    // useEffect(() => {
    //     getUsers();
    // }, []);

    useEffect(()=>{
        if (phoneNumber.length === 10)
            setChangeColor(true)
    },[phoneNumber])

    return <LoginContext.Provider value={{productId,handleProductId,category,setCategory, phoneNumber,setPhoneNumber,changeColor,setChangeColor, isLoggedIn, handleLogin, userId, setUserId, handleUserImage, handleProductId}}>
   {children}
    </LoginContext.Provider>
}
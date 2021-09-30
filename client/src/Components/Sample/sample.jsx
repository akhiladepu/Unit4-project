import { useEffect, useState } from "react";
import axios from "axios";
// import json from "/SVGComponents/lf30_editor_6j2y8706.json"
// console.log('json:', json)

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
//   timeout: 1000,
});

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const Sample = () => {

    const [userAvatar, setUserAvatar] = useState(0);

    const getProducts = async () => {
        await instance("/cars").then((data) => {        // laptops , bikes , mobiles
            console.log(data.data);
            return data;
        })
    }

    useEffect(() => {
        
        const rndInt = randomIntFromInterval(1, 4);

        setUserAvatar(rndInt);
        
    }, [])

    useEffect(() => {
        getProducts();
    }, [])
    
    return <>
        {/* <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_wh7ho6zf.json" background="transparent" speed="1" style={{ width: "300px", height: "300px"}} loop autoplay></lottie-player> */}
        {/* <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fvhi4ck1.json" background="transparent" speed="1" style={{ width: "300px", height: "300px"}} loop autoplay></lottie-player> */}
        {/* {userAvatar !== 0 ? <img src={`https://statics.olx.in/external/base/img/avatar_${userAvatar}.png`} alt="avatar" /> : <></>} */}
    </>;
}
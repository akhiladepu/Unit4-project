// import { useEffect, useState } from "react";
// import axios from "axios";
// // import json from "/SVGComponents/lf30_editor_6j2y8706.json"
// // console.log('json:', json)

// const instance = axios.create({
//   baseURL: 'http://localhost:4000/',
// //   timeout: 1000,
// });

// // const randomIntFromInterval = (min, max) => { // min and max included 
// //   return Math.floor(Math.random() * (max - min + 1) + min)
// // }

// export const Sample = () => {

//     // const [userAvatar, setUserAvatar] = useState(0);

//     // const getProducts = async () => {
//     //     await instance("/cars").then((data) => {
//     //         console.log(data.data);
//     //         return data;
//     //     })
//     // }

//     // useEffect(() => {
        
//     //     const rndInt = randomIntFromInterval(1, 4);

//     //     setUserAvatar(rndInt);
        
//     // }, [])

//     // useEffect(() => {
//     //     getProducts();
//     // }, [])

//     const getUsers = async () => {
//         await instance("/users").then((data) => {
//             console.log(data.data);
//             return data;
//         })
//     }
    
//     useEffect(() => {
//         getUsers();
//     }, [])
    
//     return <>
        
//         {/* <lottie-player src={`/SVGComponents/lf20_af67hsoz.json`} background="transparent" speed="1" style={{ width: "120px", height: "120px"}} loop autoplay></lottie-player>
//         <lottie-player src={`/SVGComponents/lf20_x3rqvhjl.json`} background="transparent" speed="1" style={{ width: "120px", height: "120px"}} loop autoplay></lottie-player>
//         <img src={`/SVGComponents/uploading.gif`} alt=""/> */}
//         {/* {userAvatar !== 0 ? <img src={`https://statics.olx.in/external/base/img/avatar_${userAvatar}.png`} alt="avatar" /> : <></>} */}
//     </>;
// }
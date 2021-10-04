// import React, { useState, useEffect } from 'react';
// import axios from 'axios'

// export const ViewYourAdd = () => {

//     const [picIndex, setPicIndex] = useState(0);
//     const [incData,setIncData]=useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:4000/cars")
//             .then((data) => { setIncData(data.data[0])})
//     },[])

//     console.log("Sending data from server :",incData);
//     const arr = incData.productImages;

//     // const arr= ["https://e0.365dm.com/21/09/2048x1152/skysports-cristiano-ronaldo_5529927.jpg"]

       
    
//     const AddImg = () => {
//         if (picIndex === arr.length - 1) {
//             setPicIndex(0);
//         }
//         else
//         {
//             setPicIndex(picIndex + 1);
//         }
//     }

//     const DecImg = () => {
        
//         if (picIndex === 0) {
//             setPicIndex(arr.length - 1);
//         }
//         else
//         {
//             setPicIndex(picIndex - 1);
//         }
//     }

//     return (
//         <div className="col-12" style={{ margin: '10px auto' }}>
            
//             <div className="col-6" style={{border: '1px solid black' ,marginLeft: '3.89%'}}>
//                 breadcrums
//             </div>

//             {/* 2nd row start */}
//             <div className="col-12 d-flex flex-row" style={{ margin: '10px auto' }}>

//                 {/* <div className="d-flex flex-column" style={{width:"37.43%",marginLeft: '3.89%',marginRight:"1.67%"}}>
//                     <div style={{position:"relative"}}>
//                         <button onClick={AddImg} style={{ outline: "none",border: "none",background: "rgb(255,255,255,0.7)", width: "38px", height: "38px", justifyContent: "center", borderRadius: "50%", position: "absolute", right: "3%", top: "40%" }}><img src={`SliderLeft.svg`} alt="" style={{position: "absolute", top:"30%",right:"30%",left:"40%",bottom:"30%"}} /></button>
//                         <img src={arr[0]} className="img-fluid" style={{ height: "345px", width: "100%" }} alt="" />
//                         <button  onClick={DecImg} style={{outline: "none",border: "none",background: "rgb(255,255,255,0.7)", width: "38px", height: "38px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "3%", top: "40%" }}><img src={`SliderLeft.svg`} alt="" style={{position: "absolute", top:"30%",right:"40%",left:"30%",bottom:"30%",transform:"scaleX(-1)"}} /></button>
//                     </div>
//                     <div className="d-flex flex-row" style={{justifyContent:"space-between",marginTop:"23px"}}>
//                         <div style={{width:"26.5%"}}>
//                             <img src={arr[1]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
//                         </div>
//                         <div style={{width:"26.5%"}}>
//                              <img src={arr[2]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
//                         </div>
//                         <div style={{ width: "26.5%",position: "relative"}}>
//                             <div style={{position:"absolute", padding:"14% 39%",background:"rgb(0,0,0,0.48)" ,color:"white"}}> <h1> +{arr.length-1-3}</h1></div>
//                             <img src={arr[3]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
//                         </div>
//                     </div>
//                 </div> */}

//                 <div className="d-flex flex-column" style={{width:"29.65%",marginRight:"1.67%",background: "#FFFFFF",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)"}}>
                    
//                     <div className="col-12" style={{background: "#E6F3F2"}}>
//                         <p style={{ marginLeft: "5.6%",marginTop:"19px",width:"54%",fontFamily: "Graphik", fontSize: "24px", fontStyle: "normal", fontWeight: "600", lineheight: "26px", letterspacing: "0em", textAlign: "left",color:"#002F34"}}>
//                             Canon DSLR camera
//                         </p>
//                     </div>

//                     <div className="col-12 d-flex flex-row">
//                         <div className="col-6" style={{background: "rgba(0, 47, 52, 0.8)"}}>
//                             <p style={{marginTop:"15px",textAlign: "center",fontFamily: "Graphik",fontWeight: "500",fontSize: "18px",lineHeight: "20px",color:"white"}}>
//                                 Ad details
//                             </p>
//                        </div>
//                         <div className="col-6" style={{background: "#FFFFFF",border: "1px solid rgba(0, 47, 52, 0.6)",boxSizing: "border-box"}}>
//                             <p style={{marginTop:"15px",textAlign: "center",fontFamily: "Graphik",fontWeight: "500",fontSize: "18px",lineHeight: "20px",color:"#002F34"}}>
//                                 Description
//                             </p>
//                        </div>
//                     </div>

//                     <div className="col-12 d-flex flex-row">
//                         <div className="col-6" style={{textAlign: 'start'}} >
//                             <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Brand Name</p>
//                             <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Year of purchase</p>
//                             <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Model</p>
//                             <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Physical Condition</p>
//                         </div>
//                         <div className="col-6" style={{textAlign: 'start'}}>
//                             <p style={{ margin: "24px 32px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "400", fontSize: "18px", color: "#002F34" }}>{incData[0].brandName}</p>
//                             <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"18px",color:"#002F34" }}>{incData[0].yearOfPurchase}</p>
//                             <p style={{ margin: "24px 32px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "400", fontSize: "18px", color: "#002F34" }}>{incData[0].model}</p>
//                             <p style={{ margin: "24px 32px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "400", fontSize: "18px", color: "#002F34" }}>{incData[0].physicalCondition}</p>
//                         </div>
//                     </div>

//                 </div>
                
//                 <div className="d-flex flex-column" style={{width:"21.80%"}}>
                    
//                     <div className="col-12 d-flex flex-column" style={{ boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)", marginBottom: "3.2%" }}>
                        
//                             <div className="col-10 d-flex flex-row" style={{ margin:"10px auto",justifyContent: "space-between",marginTop:"32px"}}>
//                             <div>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"600",fontSize:"24px",lineHeight:"26px",color:"#002F34" }}>
//                                     {incData[0].price}
//                                 </p>
//                             </div>
//                             <div>
//                                 <p style={{ fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>{incData[0].postedOn}</p>
//                             </div>
//                             </div>
                            
//                         <div className="col-10" style={{ margin: "0px auto", textAlign: 'start' }}>
//                             <p style={{ fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34", marginBottom: "53px" }}>{incData[0].location}</p>
//                         </div>
                            
//                             <div className="col-10 d-flex flex-row" style={{margin:"10px auto",justifyContent: "space-between",marginBottom:"20px"}}>
//                             <div style={{ width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
//                                 <p style={{textAlign: "center",paddingTop: "10px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"16px",lineHeight:"18px",color:"rgb(0,47,52,0.8)"}}>Edit Ad</p>
//                             </div>
//                                 <div style={{ width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
//                                 <p style={{textAlign: "center",paddingTop: "10px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"16px",lineHeight:"18px",color:"rgb(0,47,52,0.8)"}}>Remove Ad</p>
//                             </div>
//                             </div>
                        
//                     </div>
                        
//                     <div className="col-12 d-flex flex-column" style={{ boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)"}}>
                        
//                         <div className="col-10" style={{margin:"0px auto",textAlign:"start"}}>
//                             <p style={{ marginTop:"24px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",lineHeight:"20px",color:"#002F34"}}>Seller Details</p>
//                         </div>

//                         <div className="col-10 d-flex flex-row" style={{margin:"20px auto"}}>
//                             <div style={{  width: "64px", height: "64px", borderRadius: "50%" }}> <img src={arr[1]} alt="" style={{ width: "64px",height:"64px",borderRadius: "50%"}}/> </div>
//                             <div style={{marginLeft: "24px",textAlign: "start"}}>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"16px",lineHeight:"18px",letterSpace:"0.06em",color:"#000000" }}>Rahul singh</p>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Member since sept,2021</p>
//                             </div>
//                         </div>

//                         <div className="col-10 d-flex flex-row" style={{margin:"0px auto",textAlign:"start"}}>
//                             <div>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Contact no</p>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Email</p>
//                             </div>
//                             <div>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>87907896767</p>
//                                 <p style={{fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Rahul@masai</p>
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//             </div>
//             {/* 2nd row ends */}

//             {/* 3rd row start */}
//             <div className="col-12 d-flex flex-column" style={{ margin: '100px auto' }} >
//                 <div className="col-6" style={{marginLeft: '3.89%',textAlign:"start"}}>
//                     <p style={{fontFamily:"Roboto",fontWeight:"400",fontSize:"36px",lineHeight:"42.19px"}}>Releated Items</p>
//                 </div>

//                 <div className="d-flex flex-row" style={{width:"92.22%",margin:"10px 3.89%",justifyContent:"space-between",color:"#002F34"}} >
//                     <div className="d-flex flex-column" style={{height:"341px",width:"314px",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)",borderRadius: "4px"}}>
//                         <div style={{ width: "100%", height: "52.7%" }}>
                            
//                             <div style={{ position: "relative" }}>
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "74px", height: "21px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "10px",right:"230px", top: "10px" }}><img src={`Feature.svg`} alt="" /></button>
//                                 <img src={arr[1]} alt="" style={{width:"100%"}}  />
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "32px", height: "32px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "275px",right:"14px", top: "14px" }}><img src={`like.svg`} alt="" style={{ position: "absolute", top: "8px", right: "7px", left: "7px", bottom: "7.12px" }} /></button>
//                                 </div>
                            
                            
//                         </div>
//                         <div className="d-flex flex-row" style={{marginTop:"47px",marginLeft:"24px",marginRight:"24px",justifyContent:"space-between"}}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>$ 59000</p>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
//                         </div>
//                         <div style={{ textAlign: "start", margin: "0px 24px" }}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
//                         </div>
//                         <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
//                             <p>biahr california</p>
//                         </div>
//                     </div>
//                      <div className="d-flex flex-column" style={{height:"341px",width:"314px",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)",borderRadius: "4px"}}>
//                         <div style={{ width: "100%", height: "52.7%" }}>
                            
//                             <div style={{ position: "relative" }}>
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "74px", height: "21px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "10px",right:"230px", top: "10px" }}><img src={`Feature.svg`} alt="" /></button>
//                                 <img src={arr[1]} alt="" style={{width:"100%"}}  />
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "32px", height: "32px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "275px",right:"14px", top: "14px" }}><img src={`like.svg`} alt="" style={{ position: "absolute", top: "8px", right: "7px", left: "7px", bottom: "7.12px" }} /></button>
//                                 </div>
                           
                            
//                         </div>
//                         <div className="d-flex flex-row" style={{marginTop:"47px",marginLeft:"24px",marginRight:"24px",justifyContent:"space-between"}}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>$ 59000</p>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
//                         </div>
//                         <div style={{ textAlign: "start", margin: "0px 24px" }}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
//                         </div>
//                         <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
//                             <p>biahr california</p>
//                         </div>
//                     </div>
//                      <div className="d-flex flex-column" style={{height:"341px",width:"314px",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)",borderRadius: "4px"}}>
//                         <div style={{ width: "100%", height: "52.7%" }}>
                            
//                             <div style={{ position: "relative" }}>
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "74px", height: "21px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "10px",right:"230px", top: "10px" }}><img src={`Feature.svg`} alt="" /></button>
//                                 <img src={arr[1]} alt="" style={{width:"100%"}}  />
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "32px", height: "32px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "275px",right:"14px", top: "14px" }}><img src={`like.svg`} alt="" style={{ position: "absolute", top: "8px", right: "7px", left: "7px", bottom: "7.12px" }} /></button>
//                                 </div>
                            
                            
//                         </div>
//                         <div className="d-flex flex-row" style={{marginTop:"47px",marginLeft:"24px",marginRight:"24px",justifyContent:"space-between"}}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>$ 59000</p>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
//                         </div>
//                         <div style={{ textAlign: "start", margin: "0px 24px" }}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
//                         </div>
//                         <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
//                             <p>biahr california</p>
//                         </div>
//                     </div>
//                      <div className="d-flex flex-column" style={{height:"341px",width:"314px",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)",borderRadius: "4px"}}>
//                         <div style={{ width: "100%", height: "52.7%" }}>
//                             {/* fhdj */}
//                             <div style={{ position: "relative" }}>
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "74px", height: "21px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "10px",right:"230px", top: "10px" }}><img src={`Feature.svg`} alt="" /></button>
//                                 <img src={arr[1]} alt="" style={{width:"100%"}}  />
//                                 <button onClick={AddImg} style={{ outline: "none", border: "none", background: "rgb(255,255,255,0.7)", width: "32px", height: "32px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "275px",right:"14px", top: "14px" }}><img src={`like.svg`} alt="" style={{ position: "absolute", top: "8px", right: "7px", left: "7px", bottom: "7.12px" }} /></button>
//                                 </div>
                            
                            
//                         </div>
//                         <div className="d-flex flex-row" style={{marginTop:"47px",marginLeft:"24px",marginRight:"24px",justifyContent:"space-between"}}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>$ 59000</p>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
//                         </div>
//                         <div style={{ textAlign: "start", margin: "0px 24px" }}>
//                             <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
//                         </div>
//                         <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
//                             <p>biahr california</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* 3rd row ends */}

//         </div>
//     )
// }

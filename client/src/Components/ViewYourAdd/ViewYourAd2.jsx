import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './AddYourAd.css';
import { UpperDiv,PhotoClg,ProductDetail,AdDetailKey,DescriptionKey,Pricing,SmallerPricing,LowerDiv,SmallPicINF,ImageCont,SmallPICASHOW} from './ViewStylecmp';

export const ViewYourAd2 = () => {

    const [allData, setAllData] = useState([]);    // handlimng all datas
    const [images, setImages] = useState([]);   // handle main images 

    const [lowerImg1, setLowerImg1] = useState([]);
    const [lowerImg2, setLowerImg2] = useState([]);
    const [lowerImg3, setLowerImg3] = useState([]);
    const [lowerImg4, setLowerImg4] = useState([]);
    const [lowerData1, setLowerData1] = useState([]);
    const [lowerData2, setLowerData2] = useState([]);
    const [lowerData3, setLowerData3] = useState([]);
    const [lowerData4,setLowerData4]=useState([]); 

    useEffect(() => {
        axios.get("http://localhost:4000/cars")
            .then((data) => {
                setAllData(data.data[0]);
                setImages(data.data[0].productImages);
                setLowerImg1(data.data[1].productImages);
                setLowerImg2(data.data[2].productImages)
                setLowerImg3(data.data[3].productImages)
                setLowerImg4(data.data[4].productImages)
                setLowerData1(data.data[1]);
                setLowerData2(data.data[2]);
                setLowerData3(data.data[3]);
                setLowerData4(data.data[4]);
            })
    },[])

    


    const [trig, setTrig] = useState(0);

    
    const handleTrig1 = () => {
       
        if (trig === images.length-1) {
            setTrig(0);
        } else
        {
            setTrig(trig + 1);
        }
            
    }

    const handleTrig2 = () => {
        if (trig === 0) {
            setTrig(images.length-1);
        } else
        {
            setTrig( trig - 1);
        }
    }

    
    

    //Like button state management starts
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false);

    const handleLike1 = () => {
        setHover1(!hover1);
    }
    const handleLike2 = () => {
        setHover2(!hover2);
    }
    const handleLike3 = () => {
        setHover3(!hover3);
    }
    const handleLike4 = () => {
        setHover4(!hover4);
    }
    //Like button state management starts


    // fututre use 

    const handleEditAd = () => {
        
    }

    const handleRemoveAd = () => {
        
    }

    return (
        <div className="col-12">
            
            <UpperDiv className="d-flex flex-row">
                
                <PhotoClg className="d-flex flex-column">
                    <div style={{ position: 'relative', width: "100%", height: "354px" }}>



                        <img src={images[trig]} style={{ height: "100%", width: "100%" }} alt="" />
                        <div onClick={handleTrig1} style={{ position: "absolute", top: "158px", left: "8px", width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.5)" }}>
                            <img src={`/ViewMyAd/SliderRight.svg`} style={{position: "absolute", top:"30%",right:"40%",left:"30%",bottom:"30%"}} alt="" />
                        </div>
                        <div onClick={handleTrig2} style={{ position: "absolute", top: "158px", left: "493px", width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.5)" }}>
                            <img src={`/ViewMyAd/SliderRight.svg`} style={{position: "absolute", top:"30%",right:"30%",left:"40%",bottom:"30%",transform:"scaleX(-1)"}} alt="" />
                        </div>
                    </div>

                    <div className="d-flex flex-row" style={{ justifyContent: "space-between" }}>
                        
                        <SmallPICASHOW>
                            {images.length >= 2 ? <img src={images[1]} alt="" style={{ width:"100%",height:"100%"} }/> : <div> <div style={{ position:"absolute",width: '100%', height: '100%', background: "rgb(0,0,0,0.4)",zIndex:"14",color:"white",fontSize:"60px",textAlign:"center" }}>
                                +{images.length-2}
                            </div>
                                <img src={images[1]} style={{ height:"100%", width:"100%"}} alt="" /> </div> }
                        </SmallPICASHOW>

                        <SmallPICASHOW>
                            {images.length >= 3 ? <img src={images[2]} alt="" style={{ width:"100%",height:"100%"} }/> : <div> <div style={{ position:"absolute",width: '100%', height: '100%', background: "rgb(0,0,0,0.4)",zIndex:"14",color:"white",fontSize:"60px",textAlign:"center" }}>
                                +{images.length-2}
                            </div>
                            <img src={images[2]} style={{ height:"100%", width:"100%"}} alt="" /> </div> }
                        </SmallPICASHOW>

                        <SmallPICASHOW style={{position: "relative"}}>
                            {images.length >= 100 ? <img src={images[2]} alt="" style={{ width:"100%",height:"100%"} }/> : <div> <div style={{ position:"absolute",width: '100%', height: '100%', background: "rgb(0,0,0,0.4)",zIndex:"14",color:"white",fontSize:"60px",textAlign:"center" }}>
                                +{images.length-2}
                            </div>
                            <img src={images[3]} style={{ height:"100%", width:"100%"}} alt="" /> </div> }
                        </SmallPICASHOW>

                    </div>
                </PhotoClg>

                <ProductDetail className="d-flex flex-column">
                    <div style={{ position: "relative",width: '100%', height: '64px',background:"rgba(230, 243, 242, 1)"}}>
                        <p style={{ position: "absolute", top:"26px",left:"24px",fontFamily: "Graphik", fontSize: "24px", fontStyle: "normal", fontWeight: "600", lineheight: "26px", letterspacing: "0em", textAlign: "left",color:"#002F34"}}>
                            {allData.model}
                        </p>
                    </div>
                    <div className="col-12 d-flex flex-row" style={{position:"relative"}}>
                        <div className="col-6" style={{ position: "relative", background: "rgba(0, 47, 52, 0.8)" }}>
                            <img src={`/ViewMyAd/Addetails.svg`} alt="" style={{ margin:"15px 64px" }}/>
                       </div>
                        <div className="col-6" style={{background: "#FFFFFF",border: "1px solid rgba(0, 47, 52, 0.6)",boxSizing: "border-box"}}>
                            <img src={`/ViewMyAd/Description.svg`} alt="" style={{ margin:"15px 57px" }}/>
                       </div>
                    </div>

                    <div className="col-12 d-flex flex-column" style={{position:"absolute"}}>
                        
                        <div className="d-flex flex-row" style={{position:"absolute"}}>
                            <AdDetailKey style={{width:"106px",position:"absolute",top:"142px",left:"24px"}}>Brand Name</AdDetailKey>  <DescriptionKey style={{width:"195px",position:"absolute",top:"142px",left:"230px"}}>{allData.brandName}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row" style={{position:"absolute"}}>
                            <AdDetailKey style={{width:"144px",position:"absolute",top:"194px",left:"24px"}}>Year of purchase</AdDetailKey>  <DescriptionKey style={{width:"195px",position:"absolute",top:"194px",left:"230px"}}>{allData.yearOfPurchase}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row" style={{position:"absolute"}}>
                            <AdDetailKey style={{width:"54px",position:"absolute",top:"246px",left:"24px"}}>Model</AdDetailKey>  <DescriptionKey style={{width:"195px",position:"absolute",top:"246px",left:"230px"}}>{allData.model}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row" style={{position:"absolute"}}>
                            <AdDetailKey style={{width:"160px",position:"absolute",top:"318px",left:"24px"}}>Physical Condition</AdDetailKey>  <DescriptionKey style={{width:"195px",position:"absolute",top:"318px",left:"230px"}}>{allData.physicalCondition}</DescriptionKey>
                        </div>
                            
                    </div>

                </ProductDetail>

                <Pricing className="d-flex flex-column">

                    <SmallerPricing className="d-flex flex-column" style={{ position: "relative" }}>
                        <div className="col-10 d-flex flex-row" style={{position:"relative",margin:"10px auto",justifyContent: "space-between",marginTop:"32px"}}>
                            <div style={{ position: "relative" }} >
                                <p style={{position:"absolute",top:"0px",left:"0px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"600",fontSize:"24px",lineHeight:"26px",color:"#002F34" }}>
                                    ₹{allData.price}
                                </p>
                            </div>
                            <div>
                                <p style={{ width:"100px",position:"absolute",top:"5px",left:"170px",fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>
                                    {allData.postedOn}
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-10" style={{ position: "relative", margin: "0px auto", textAlign: 'start' }}>
                            <p style={{position:"absolute",top:"40px",left:"-70px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34", marginBottom: "53px" }}>
                                {allData.location}
                            </p>
                        </div>

                        <div className="d-flex flex-row" style={{position: "relative",width:"282px", height:"48px",marginLeft:"18px",justifyContent:"space-between"}}>
                            
                            <div onClick={handleEditAd} style={{ position: 'absolute',top:"110px",width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
                                <img src={`/ViewMyAd/EditAd.svg`} alt="" style={{margin:"15px 32px"}}/>
                            </div>
                                <div onclick={handleRemoveAd} style={{  position: 'absolute',top:"110px",left:"140px",width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
                                <img src={`/ViewMyAd/Removead.svg`} alt="" style={{margin:"15px 24px"}}/>
                            </div>


                        </div>
                    </SmallerPricing>

                    <SmallerPricing className="d-flex flex-column" style={{position: "relative", marginTop: "16px", height: "259px" }}>
                        
                        <div className="col-10" style={{ position: "relative" ,margin:"0px auto",textAlign:"start"}}>
                            <p style={{position: "absolute",top:"24px",left:"-120px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",lineHeight:"20px",color:"#002F34"}}>Seller Details</p>
                        </div>

                        <div className="col-10 d-flex flex-row" style={{position:"relative", margin:"20px auto"}}>
                            <div style={{ position:"absolute",top:"48px",width: "64px", height: "64px", borderRadius: "50%" }}>
                                <img src="https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg" alt="" style={{ width: "64px", height: "64px", borderRadius: "50%" }} />
                            </div>
                            <div style={{position:"relative",marginLeft: "24px",}}>
                                <p style={{position:"absolute",top:"57px",left:"60px" ,width:"200px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"16px",lineHeight:"18px",letterSpace:"0.06em",color:"#000000" }}>Rahul singh</p>
                                <p style={{position:"absolute",top:"84px",left:"60px",width:"200px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Member since sept,2021</p>
                            </div>
                        </div>

                        <div className="col-10 d-flex flex-row" style={{position: "relative",margin:"0px auto",textAlign:"start"}}>
                            <div style={{position:"relative"}}>
                                <p style={{position:"absolute",top:"130px",left:"0px",width:"100px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Contact no</p>
                                <p style={{position:"absolute",top:"180px",left:"0px",width:"100px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Email</p>
                            </div>
                            <div style={{position:"relative"}}>
                                <p style={{position:"absolute",top:"130px",left:"80px",width:"100px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>87907896767</p>
                                <p style={{position:"absolute",top:"180px",left:"80px",width:"100px",textAlign: "start",fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Rahul@masai</p>
                            </div>
                        </div>


                    </SmallerPricing>

                </Pricing>

            </UpperDiv>

            <div style={{marginTop:"101px",marginLeft:"56px",marginBottom:"40px"}}>
                <img src={`/ViewMyAd/Toppicksforyou.svg`} alt="" />
            </div>

            <LowerDiv className="d-flex flex-row" style={{position: "relative"}}>

                <SmallPicINF className="d-flex flex-column" style={{position:"relative"}}>
                    <ImageCont style={{position:"relative"}}>
                        <img src={`/ViewMyAd/Feature.svg`} alt="" style={{position:"absolute",top: '10px', left: "10px",}} />
                        <div onClick={handleLike1} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover1 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`/ViewMyAd/like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src={lowerImg1[0]} alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont >
                    <div className="d-flex flex-row" style={{position:"relative"}}>
                        <p style={{ position:"absolute",top:"0px",left:"-6px",width:"80px",textAlign:"start", marginTop: "24px", marginBottom: "17px", marginLeft: "29px", marginRight: "104px", fontFamily: "Graphik", fontWeight: "600", fontStyle: "normal", fontSize: "20px", lineHeight: "22px", color: "#002F34" }}>
                            ₹{lowerData1.price}
                        </p>
                        <p style={{ position:"absolute",top:"3px",left:"200px",width:"100px",textAlign:"start", marginTop: "25px", marginBottom: "17px", marginRight: "24px", fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "13.2px", color: "rgb(0,47,52,0.8)" }}>
                            {lowerData1.postedOn}
                        </p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px",position:"relative" }}>
                        <p style={{ position:"absolute",top:"70px",left:"-1px",width:"100px",textAlign:"start",fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>
                            {lowerData1.brandName }
                        </p>
                    </div>
                    <div style={{ position:"relative" ,textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                        <p style={{position:"absolute",top:"110px",left:"-1px",width:"200px",textAlign:"start"}}>{lowerData1.location}</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`/ViewMyAd/Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike2} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover2 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`/ViewMyAd/like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src={lowerImg2[1]} alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row" style={{position:"relative"}}>
                        <p style={{ position:"absolute",top:"0px",left:"-6px",width:"80px",textAlign:"start",marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"16px",lineHeight:"22px",color:"#002F34"}}>₹{lowerData2.price}</p>
                        <p style={{ position:"absolute",top:"3px",left:"200px",width:"100px",textAlign:"start",marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>{lowerData2.postedOn}</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px",position:"relative" }}>
                        <p style={{ position:"absolute",top:"70px",left:"-1px",width:"100px",textAlign:"start",fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>{lowerData2.brandName}</p>
                    </div>
                    <div style={{position:"relative" ,textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p style={{position:"absolute",top:"110px",left:"-1px",width:"200px",textAlign:"start"}}>{lowerData2.location}</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`/ViewMyAd/Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike3} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover3 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`/ViewMyAd/like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src={lowerImg3[0]} alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row" style={{position:"relative"}}>
                        <p style={{position:"absolute",top:"0px",left:"-6px",width:"80px",textAlign:"start", marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"14.5px",lineHeight:"22px",color:"#002F34"}}>₹{lowerData3.price}</p>
                        <p style={{position:"absolute",top:"3px",left:"200px",width:"100px",textAlign:"start",marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>{lowerData3.postedOn}</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px",position:"relative" }}>
                        <p style={{ position:"absolute",top:"70px",left:"-1px",width:"100px",textAlign:"start",fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>{lowerData3.brandName}</p>
                    </div>
                    <div style={{position:"relative",textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p style={{position:"absolute",top:"110px",left:"-1px",width:"200px",textAlign:"start"}}>{lowerData3.location}</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`/ViewMyAd/Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike4} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover4 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`/ViewMyAd/like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src={lowerImg4[1]} alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row"  style={{position:"relative"}}>
                        <p style={{ position:"absolute",top:"0px",left:"-6px",width:"80px",textAlign:"start",marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"14.5px",lineHeight:"22px",color:"#002F34"}}>₹{lowerData4.price}</p>
                        <p style={{position:"absolute",top:"3px",left:"200px",width:"100px",textAlign:"start",marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>{lowerData4.postedOn}</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px" ,position:"relative"}}>
                        <p style={{ position:"absolute",top:"70px",left:"-1px",width:"100px",textAlign:"start",fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>{lowerData4.brandName}</p>
                    </div>
                    <div style={{position:"relative" ,textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                        <p style={{position:"absolute",top:"110px",left:"-1px",width:"200px",textAlign:"start"}}>{lowerData4.location}</p>
                        </div>
                </SmallPicINF>

            </LowerDiv>


        </div>
    )
}
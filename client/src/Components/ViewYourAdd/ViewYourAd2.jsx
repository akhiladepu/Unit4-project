import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { UpperDiv,PhotoClg,ProductDetail,AdDetailKey,DescriptionKey,Pricing,SmallerPricing,LowerDiv,SmallPicINF,ImageCont,SmallPICASHOW} from './ViewStylecmp';

export const ViewYourAd2 = () => {

    const [allData, setAllData] = useState([]);
    const [images,setImages]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/cars")
            .then((data) => { setAllData(data.data[0]); setImages(data.data[0].productImages)})
    },[])

    


    const [trig, setTrig] = useState(0);

    //const arr=["https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg","https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/24/124204.jpg","https://storage.googleapis.com/afs-prod/media/78f59bc7477e4ccb86bb8b5a0fe19496/400.jpeg","https://pbs.twimg.com/media/E_vMfXFWQAYgxFp.jpg"]

    //  const arr=[...allData.productImages]
    //const imageTray = allData.productImages;
    
    

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

                        {/* jugggad */}
                           
                        {/* jugggadd */}


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
                    <div style={{width: '100%', height: '64px',background:"rgba(230, 243, 242, 1)"}}>
                        <p style={{margin:"19px 24px",fontFamily: "Graphik", fontSize: "24px", fontStyle: "normal", fontWeight: "600", lineheight: "26px", letterspacing: "0em", textAlign: "left",color:"#002F34"}}>
                            {allData.model}
                        </p>
                    </div>
                    <div className="col-12 d-flex flex-row">
                        <div className="col-6" style={{background: "rgba(0, 47, 52, 0.8)"}}>
                            <p style={{marginTop:"15px",textAlign: "center",fontFamily: "Graphik",fontWeight: "500",fontSize: "18px",lineHeight: "20px",color:"white"}}>
                                Ad details
                            </p>
                       </div>
                        <div className="col-6" style={{background: "#FFFFFF",border: "1px solid rgba(0, 47, 52, 0.6)",boxSizing: "border-box"}}>
                            <p style={{marginTop:"15px",textAlign: "center",fontFamily: "Graphik",fontWeight: "500",fontSize: "18px",lineHeight: "20px",color:"#002F34"}}>
                                Description
                            </p>
                       </div>
                    </div>

                    <div className="col-12 d-flex flex-column">
                        
                        <div className="d-flex flex-row">
                            <AdDetailKey style={{ marginRight: "100px" }}>Brand Name</AdDetailKey>  <DescriptionKey>{allData.brandName}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row">
                            <AdDetailKey style={{ marginRight: "62px" }}>Year of purchase</AdDetailKey>  <DescriptionKey>{allData.yearOfPurchase}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row">
                            <AdDetailKey style={{ marginRight: "152px" }}>Model</AdDetailKey>  <DescriptionKey>{allData.model}</DescriptionKey>
                        </div>

                        <div className="d-flex flex-row">
                            <AdDetailKey style={{ marginRight: "46px" }}>Physical Condition</AdDetailKey>  <DescriptionKey>{allData.physicalCondition}</DescriptionKey>
                        </div>
                            
                    </div>

                </ProductDetail>

                <Pricing className="d-flex flex-column">

                    <SmallerPricing className="d-flex flex-column">
                        <div className="col-10 d-flex flex-row" style={{ margin:"10px auto",justifyContent: "space-between",marginTop:"32px"}}>
                            <div>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"600",fontSize:"24px",lineHeight:"26px",color:"#002F34" }}>
                                    ₹ {allData.price}
                                </p>
                            </div>
                            <div>
                                <p style={{ fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>
                                    {allData.postedOn}
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-10" style={{ margin: "0px auto", textAlign: 'start' }}>
                            <p style={{ fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34", marginBottom: "53px" }}>
                                {allData.location}
                            </p>
                        </div>

                        <div className="d-flex flex-row" style={{width:"282px", height:"48px",marginLeft:"18px",justifyContent:"space-between"}}>
                            
                            <div onClick={handleEditAd} style={{ width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
                                <p style={{marginTop:"5px", textAlign: "center", paddingTop: "10px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "16px", lineHeight: "18px", color: "rgb(0,47,52,0.8)" }}>
                                    Edit Ad
                                </p>
                            </div>
                                <div onclick={handleRemoveAd} style={{ width: "47%", border: "1px solid #002F34",boxSizing: "border-box",borderRadius:"4px" }}>
                                <p style={{marginTop:"5px",textAlign: "center", paddingTop: "10px", fontFamily: "Graphik", fontStyle: "normal", fontWeight: "normal", fontSize: "16px", lineHeight: "18px", color: "rgb(0,47,52,0.8)" }}>
                                    Remove Ad
                                </p>
                            </div>


                        </div>
                    </SmallerPricing>

                    <SmallerPricing className="d-flex flex-column" style={{ marginTop: "16px", height: "259px" }}>
                        
                        <div className="col-10" style={{margin:"0px auto",textAlign:"start"}}>
                            <p style={{ marginTop:"24px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",lineHeight:"20px",color:"#002F34"}}>Seller Details</p>
                        </div>

                        <div className="col-10 d-flex flex-row" style={{margin:"20px auto"}}>
                            <div style={{ width: "64px", height: "64px", borderRadius: "50%" }}>
                                <img src="https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg" alt="" style={{ width: "64px", height: "64px", borderRadius: "50%" }} />
                            </div>
                            <div style={{marginLeft: "24px",textAlign: "start"}}>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"16px",lineHeight:"18px",letterSpace:"0.06em",color:"#000000" }}>Rahul singh</p>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Member since sept,2021</p>
                            </div>
                        </div>

                        <div className="col-10 d-flex flex-row" style={{margin:"0px auto",textAlign:"start"}}>
                            <div>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Contact no</p>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",fontWeight:"400",fontSize:"16px",lineHeight:"17.6px",color:"#002F34"}}>Email</p>
                            </div>
                            <div>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>87907896767</p>
                                <p style={{fontFamily: "Graphik",fontStyle: "normal",marginLeft:"32px",fontWeight:"400",fontSize:"14px",lineHeight:"15.4px",color:"rgb(0,47,52,0.8)"}}>Rahul@masai</p>
                            </div>
                        </div>


                    </SmallerPricing>

                </Pricing>

            </UpperDiv>

            <div style={{marginTop:"101px",marginLeft:"56px",marginBottom:"40px"}}>
                <img src={`/ViewMyAd/Toppicksforyou.svg`} alt="" />
            </div>

            <LowerDiv className="d-flex flex-row">

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike1} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover1 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src="https://pbs.twimg.com/media/E_vMfXFWQAYgxFp.jpg" alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row">
                        <p style={{ marginTop: "24px", marginBottom: "17px", marginLeft: "29px", marginRight: "104px", fontFamily: "Graphik", fontWeight: "600", fontStyle: "normal", fontSize: "20px", lineHeight: "22px", color: "#002F34" }}>
                            ₹ 59000
                        </p>
                        <p style={{ marginTop: "25px", marginBottom: "17px", marginRight: "24px", fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "12px", lineHeight: "13.2px", color: "rgb(0,47,52,0.8)" }}>
                            3 DAYS AGO
                        </p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px" }}>
                        <p style={{ fontFamily: "Graphik", fontWeight: "400", fontStyle: "normal", fontSize: "14px", lineHeight: "15px", color: "#002F34" }}>
                            Maruti suzuki
                        </p>
                    </div>
                    <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p>biahr california</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike2} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover2 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src="https://pbs.twimg.com/media/E_vMfXFWQAYgxFp.jpg" alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row">
                        <p style={{ marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>₹ 59000</p>
                        <p style={{marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px" }}>
                            <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
                    </div>
                    <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p>biahr california</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike3} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover3 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} />}
                        </div>
                        <img src="https://pbs.twimg.com/media/E_vMfXFWQAYgxFp.jpg" alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row">
                        <p style={{ marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>₹ 59000</p>
                        <p style={{marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px" }}>
                            <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
                    </div>
                    <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p>biahr california</p>
                        </div>
                </SmallPicINF>

                <SmallPicINF className="d-flex flex-column">
                    <ImageCont>
                        <img src={`Feature.svg`} alt="" style={{ position: 'absolute', top: '10px', left: "10px" }} />
                        <div onClick={handleLike4} style={{ position: 'absolute', width: "32px", top: '10px', right: "10px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.6)" }}>
                            {hover4 ? <img src={`/ViewMyAd/LikeDark.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> : <img src={`like.svg`} alt="" style={{ position: 'absolute', top: "25%", left: "20%" }} /> }
                        </div>
                        <img src="https://pbs.twimg.com/media/E_vMfXFWQAYgxFp.jpg" alt="" style={{width:"100%",height:"100%"}} />
                    </ImageCont>
                    <div className="d-flex flex-row">
                        <p style={{ marginTop:"24px",marginBottom:"17px",marginLeft:"29px",marginRight:"104px",fontFamily:"Graphik",fontWeight:"600",fontStyle:"normal",fontSize:"20px",lineHeight:"22px",color:"#002F34"}}>₹ 59000</p>
                        <p style={{marginTop:"25px",marginBottom:"17px",marginRight:"24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8)"}}>3 DAYS AGO</p>
                    </div>
                    <div style={{ textAlign: "start", marginLeft: "24px" }}>
                            <p style={{fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"14px",lineHeight:"15px",color:"#002F34"}}>Maruti suzuki</p>
                    </div>
                    <div style={{textAlign:"start",margin:"0px 24px",fontFamily:"Graphik",fontWeight:"400",fontStyle:"normal",fontSize:"12px",lineHeight:"13.2px",color:"rgb(0,47,52,0.8),text",textTransform:"uppercase"}}>
                            <p>biahr california</p>
                        </div>
                </SmallPicINF>

            </LowerDiv>


        </div>
    )
}

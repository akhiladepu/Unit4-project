import React, {useState,useEffect,useContext} from 'react';
import "./PostYourAd.css"
import { Headd, InpHead, InpBar, Downarrow, Footer, ImgTaker, FootButton, SelectBar, OptionBar } from './PostYourAddbootStrap';
import { useHistory} from "react-router-dom"
import ImageUploading from "react-images-uploading";
import axios from 'axios';
import { LoginContext } from '../../Contexts/Logincontextprovider';


const initState = {
    "brandName": "",
    "yearOfPurchase": "",
    "model": "",
    "physicalCondition": "",
    "adTitle": "",
    "descrption": "",
    "price": "",
    "pincode":""
}




export const PostYourAd = () => {


    const {userId,handleProductId,category} = useContext(LoginContext);

    const history = useHistory();

    const [text, setText] = useState(initState);   // used for storing text documents

    const [totalData, setTotalData] = useState({});

    const [fetchedData, setFetchedData] = useState([]);
    
    ///////////// used for setting image and storing images
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    
    //////////////// used to store images ends
    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({...text,[name]: value});
    }

    const handleInput = async () => {
        const netData = {

        "brandName": text.brandName,
        "yearOfPurchase": text.yearOfPurchase,
        "model": text.model,
        "physicalCondition": text.physicalCondition,
        "productName": text.adTitle,
        "description": text.descrption,
        "price": text.price,
        "location": text.pincode,
        "postedOn": Date().split("").splice(4, 11).join(""),
        "productImages": [...images],
        "sellerId": userId
        }
        await handlePost(netData);
        
        // setTotalData([netData]);
    }



    const handlePost = async(dataToBePosted) => {
        // console.log('dataToBePosted:', dataToBePosted)
        await axios.post(`http://localhost:4000/${category}`, {
            ...dataToBePosted  
        }).then((res) => {
            // console.log(res.data._id);
            handleProductId(res.data._id);
            return res;
        })
        
    }

    // const handlePost = async(dataToBePosted)  => {
        
    //     await axios.post('http://localhost:4000/cars', {
    //         ...dataToBePosted
    //     }).then((res) => {
    //         console.log(res);
    //         return res;
    //     })
 
   // }


   

    useEffect(() => {
        axios.get(`http://localhost:4000/${category}`)
            .then((data) => { setFetchedData(data.data);})
    },[])

    let brandSelect = [];
    let physicalapp = [];
    
     for (let i = 0;i< fetchedData.length; i++)
     {
         brandSelect.push(fetchedData[i].brandName);
        physicalapp.push(fetchedData[i].physicalCondition)
    }
    const newBrandSelect = Array.from(new Set(brandSelect));
    const newPhysicalapp = Array.from(new Set(physicalapp));

    let modelbase = [];
    for (let i = 0;i< fetchedData.length; i++)
    {
        if (text.brandName === fetchedData[i].brandName) {
            modelbase.push(fetchedData[i].model)
        }
    }
    const newModelbase = Array.from(new Set(modelbase));

    const routeChange = () => {
        let path = "/postloading";
        history.push(path);
    }

    return (
        <div className="col-12">
            <Headd className="col-12 d-flex flex-row">
                <div style={{marginLeft:"65.25px"}}>
                    <img src={`/POSTYOURAD/sliderLeft.svg`} alt="" style={{transform: 'scaleX(-1)',marginTop:"19px",marginRight:"24px"}} />
                    <img src={`/POSTYOURAD/olxlogo.svg`} alt="" style={{marginTop:'16px',Width:"72px",Height:"42px"}}/>
                </div>
                <div>
                    <img src={`/POSTYOURAD/PostyourAd.svg`} alt="" style={{marginLeft:'471px',marginTop:'24px',Width:"161px",Height:"26px"}} />
                </div> 
            </Headd>

            <div>
                <img src={`/POSTYOURAD/IncludeAddetails.svg`} alt="" style={{marginBottom:"8px",marginLeft: '56px', marginTop: '40px', Width: "321px", Height: "64px" }} />
                <img src={`/POSTYOURAD/UploadProductImages.svg`} alt="" style={{marginBottom:"8px",marginLeft:'355px',marginTop:'40px',Width:"417px",Height:"64px"}} />
            </div>

            <div className="d-flex flex-row">

                <div className="d-flex flex-column">
                    <div>
                        <img src={`/POSTYOURAD/Brandname.svg `} alt="" style={{marginLeft:'56px',marginTop:'32px',marginBottom:'16px'}} />
                        
                        <SelectBar className="form-select" name="brandName" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>

                            {newBrandSelect.map((el) => {
                                return <OptionBar value={el}>{el}</OptionBar>
                            })}
                        </SelectBar>
                    </div>
                    <div>
                        <img src={`/POSTYOURAD/YearofPurchase.svg`} alt="" style={{marginLeft:'56px',marginTop:'16px',marginBottom:'16px'}}/>
                        <SelectBar className="form-select"  type="text" name="yearOfPurchase" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            {[2020, 2019, 2018, 2017, 2016, 2015,
                                2014, 2013, 2012, 2010, 2009,2008,
                                2007, 2006, 2005, 2004, 2003, 2002,
                                2001, 2000].map((el) => {
                                    return <OptionBar value={el}>{el}</OptionBar>
                                })}
                        </SelectBar>
                    </div>
                    <div>
                        <img src={`/POSTYOURAD/Model.svg`} alt="" style={{marginLeft:'56px',marginTop:'16px',marginBottom:'16px'}} />
                        <SelectBar className="form-select" type="text" name="model" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            {newModelbase.map((el) => {
                                return <OptionBar  value={el}>{el}</OptionBar>
                            })}
                        </SelectBar>
                    </div>
                    <div>
                        <img src={`/POSTYOURAD/PhysicalCondition.svg`} alt="" style={{marginLeft:'56px',marginTop:'16px',marginBottom:'16px'}} />
                        <SelectBar className="form-select" type="text" name="physicalCondition" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            <OptionBar value="Almost Like new">Almost Like new</OptionBar>
                            <OptionBar value="Minor Scratches">Minor Scratches</OptionBar>
                            {newPhysicalapp.map((el) => {
                                return <OptionBar value={el}>{el}</OptionBar>
                            })}
                            <OptionBar value="Critical but reparable">Critical but reparable</OptionBar>
                            <OptionBar value="Broken">Broken</OptionBar>
                            <OptionBar value="Internal Damages">Internal Damages</OptionBar>
                        </SelectBar>
                    </div>
                    <div>
                        <img src={`/POSTYOURAD/AdTitle.svg`} alt="" style={{marginLeft:'56px',marginTop:'16px',marginBottom:'16px'}} /> <br />
                        <InpBar type="text" name="adTitle" onChange={handleChange}></InpBar>
                    </div>
                    <div>
                        <img src={`/POSTYOURAD/Descriptionnew.svg`} alt="" style={{marginLeft:'56px',marginTop:'16px',marginBottom:'16px'}} /> <br />
                        <InpBar type="text" name="descrption" onChange={handleChange}></InpBar>
                        
                    </div>
                </div>
                
                <div style={{ width: "652px" ,marginLeft:"100px"}}>
                    
                     <img src={`/POSTYOURAD/ADDImages.svg`} alt="" style={{marginLeft:'4px',marginTop:'34px',marginBottom:'16px'}} /> <br />
                    {/* <div className="col-12 d-flex flex-row" style={{flexFlow:"row wrap",justifyContent:"space-between"}}> */}

                            {/* follows the same hirarcy as commented above */}
                                <div>
                                     <ImageUploading
                                    multiple
                                    value={images}
                                    onChange={onChange}
                                    maxNumber={maxNumber}
                                    dataURLKey="data_url"
                                >
                                    {({
                                    imageList,
                                    onImageUpload,
                                    onImageRemoveAll,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps
                                    }) => (
                                    // write your building UI
                                    <div className="upload__image-wrapper">

                                    <div className="col-12 d-flex flex-row" style={{flexFlow:"row wrap",justifyContent:"space-between"}}>

                                            {/* big juggad */}

                                            {imageList[0] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(0)} style={{ position: 'absolute', height: '25px', width: "25px", borderRadius: "50%", background: "rgb(255,255,255,0.4)", textAlign: "center", right: "4%", top: "4%" }}>
                                                    <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />
                                                </div>
                                                <img src={imageList[0].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[1] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(1)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />  </div>
                                                <img src={imageList[1].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[2] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(2)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />  </div>
                                                <img src={imageList[2].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[3] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(3)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />   </div>
                                                <img src={imageList[3].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[4] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(4)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />   </div>
                                                <img src={imageList[4].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[5] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(5)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>  <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />  </div>
                                                <img src={imageList[5].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[6] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(6)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} /> </div>
                                                <img src={imageList[6].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }

                                        {imageList[7] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(7)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"rgba(0, 47, 52, 0.8)"}}>   <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />   </div>
                                                <img src={imageList[7].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }
                                        {imageList[8] === undefined ? 
                                    
                                            <ImgTaker>
                            <div onClick={onImageUpload} {...dragProps} style={{ margin: "71px 80.5px", position: "relative" }}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                                            </ImgTaker> :
                                            <ImgTaker style={{ position: 'relative' }}>
                                                <div onClick={() => onImageRemove(8)} style={{ position: 'absolute',height: '25px',width:"25px",borderRadius:"50%",background:"rgb(255,255,255,0.4)",textAlign:"center",right:"4%",top:"4%",fontFamily:"Helvetica",fontWeight:"700",color:"#002F34"}}>    <img src={`/POSTYOURAD/x.svg`} alt="" style={{ position: "absolute", top: "10%", left: "10%", height: "80%", width: "80%" }} />   </div>
                                                <img src={imageList[8].data_url} alt="" width="100%" height="100%" />
                                            </ImgTaker>
                                        }
                                            {/* big juggad */}
                                    </div>
                            
                                    </div>
                                    )}
                                </ImageUploading>
                                </div>
                    {/* end of that hireracy  */}
                    {/* </div> */}
                </div>

                

            </div>

            <div>
                <img src={`/POSTYOURAD/SetaPrice.svg`} alt="" style={{marginBottom:"8px",marginLeft: '56px', marginTop: '40px', Width: "189px", Height: "40px" }} />
                <img src={`/POSTYOURAD/Confirmyourlocation.svg`} alt="" style={{marginBottom:"8px",marginLeft:'487px',marginTop:'40px',Width:"389px",Height:"40px"}} />
            </div>

            <div className="d-flex flex-row" style={{marginBottom:"104px"}}>
                <div>
                    <img src={`/POSTYOURAD/Price.svg`} alt="" style={{marginLeft:'55px',marginTop:'20.7px',marginBottom:'16px'}} /> <br />
                    <InpBar type="text" name="price" onChange={handleChange}></InpBar>
                </div>
                <div style={{marginLeft:"60px"}}>
                     <img src={`/POSTYOURAD/Pincode.svg`} alt="" style={{marginLeft:'55px',marginTop:'20px',marginBottom:'16px'}} /> <br />
                    <InpBar type="text" name="pincode" onChange={handleChange}></InpBar>
                </div>
            </div>
            
            <FootButton onClick={handleInput}>
                <img src={`/POSTYOURAD/Redownloadpostadbutton.svg`} alt="" style={{cursor:`pointer`}} onClick={()=>{routeChange()}}/>
            </FootButton>

            <Footer>
                
                <img src={`/POSTYOURAD/Sitemap.svg`} alt="" style={{marginLeft:"56px",marginTop:"21px",marginBottom:"23px",marginRight:"912px",width:"64px",height:"18px"}}  />
                <img src={`/POSTYOURAD/FreeClassifiedsinIndia.svg`} alt="" style={{marginRight:"54px",marginTop:"21px",marginBottom:"23px"}}/>
                <img src={ `/POSTYOURAD/20062021OLX.svg`} alt="" style={{marginRight:"56px",marginTop:"21px",marginBottom:"23px"}}/>

            </Footer>

        </div>
    )
}

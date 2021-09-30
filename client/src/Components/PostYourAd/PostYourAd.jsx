import React, {useState} from 'react';
import "./PostYourAd.css"
import { Headd, InpHead, InpBar, Downarrow, Footer, ImgTaker, FootButton, SelectBar, OptionBar } from './PostYourAddbootStrap';
import ImageUploading from "react-images-uploading";


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

    const [text, setText] = useState(initState);
    const [totalData, setTotalData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({...text,[name]: value});
    }

    const handleInput = () => {
        setTotalData([...totalData,text])
    }


    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

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
                        <InpHead>Brand name *</InpHead>
                        
                        <SelectBar className="form-select" name="brandName" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            <OptionBar value="Canon">Canon</OptionBar>
                            <OptionBar value="Sony">Sony</OptionBar>
                            <OptionBar value="Nikon">Nikon</OptionBar>
                            <OptionBar value="Samsung">Samsung</OptionBar>
                            <OptionBar value="Panasonic">Panasonic</OptionBar>
                        </SelectBar>
                    </div>
                    <div>
                        <InpHead>Year of Purchase *</InpHead>
                        <SelectBar className="form-select" type="text" name="yearOfPurchase" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            <OptionBar value="2020">2020</OptionBar>
                            <OptionBar value="2019">2019</OptionBar>
                            <OptionBar value="2018">2018</OptionBar>
                            <OptionBar value="2017">2017</OptionBar>
                            <OptionBar value="2016">2016</OptionBar>
                        </SelectBar>
                    </div>
                    <div>
                        <InpHead>Model *</InpHead>
                        <InpBar type="text" name="model" onChange={handleChange}>
                        </InpBar>
                    </div>
                    <div>
                        <InpHead>Physical Condition *</InpHead>
                        <SelectBar className="form-select" type="text" name="physicalCondition" onChange={handleChange}>
                            <OptionBar value=""></OptionBar>
                            <OptionBar value="Almost Like new">Almost Like new</OptionBar>
                            <OptionBar value="Minor Scratches">Minor Scratches</OptionBar>
                            <OptionBar value="Critical but reparable">Critical but reparable</OptionBar>
                            <OptionBar value="Broken">Broken</OptionBar>
                            <OptionBar value="Internal Damages">Internal Damages</OptionBar>
                        </SelectBar>
                    </div>
                    <div>
                        <InpHead>Ad Title *</InpHead>
                        <InpBar type="text" name="adTitle" onChange={handleChange}></InpBar>
                    </div>
                    <div>
                        <InpHead>Description *</InpHead>
                        <InpBar type="text" name="descrption" onChange={handleChange}></InpBar>
                        
                    </div>
                </div>
                
                <div style={{ width: "652px",marginLeft:"113px" }}>
                    <InpHead style={{ marginLeft: "0px" }}>Description *</InpHead>
                    <div className="col-12 d-flex flex-row" style={{flexFlow:"row wrap",justifyContent:"space-between"}}>

                        <ImgTaker>
                            <div style={{ margin: "71px 80.5px", position: "relative" }}>
                               
                                {/* juggad */}
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
                                        <button
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                        Click or Drop here
                                        </button>
                                        &nbsp;
                                        <button onClick={onImageRemoveAll}>Remove all images</button>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image.data_url} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <button onClick={() => onImageUpdate(index)}>Update</button>
                                            <button onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    )}
                                </ImageUploading>
                                </div>
                                {/* jugaad */}
                                
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker>
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>
                        <ImgTaker >
                            <div style={{ margin: "71px 80.5px",position: "relative"}}>
                                <div style={{ border: "2px solid black",width:"15px",height:"15px",borderRadius: "50%",position: "absolute",top:"10px",left:"13px"}}></div>
                                <img src={`/POSTYOURAD/Cameravector.svg`} alt="" />
                            </div>
                        </ImgTaker>

                    </div>
                </div>

                

            </div>

            <div>
                <img src={`/POSTYOURAD/SetaPrice.svg`} alt="" style={{marginBottom:"8px",marginLeft: '56px', marginTop: '40px', Width: "189px", Height: "40px" }} />
                <img src={`/POSTYOURAD/Confirmyourlocation.svg`} alt="" style={{marginBottom:"8px",marginLeft:'487px',marginTop:'40px',Width:"389px",Height:"40px"}} />
            </div>

            <div className="d-flex flex-row" style={{marginBottom:"104px"}}>
                <div>
                    <InpHead>Price *</InpHead>
                    <InpBar type="text" name="price" onChange={handleChange}></InpBar>
                </div>
                <div style={{marginLeft:"60px"}}>
                    <InpHead>Pincode *</InpHead>
                    <InpBar type="text" name="pincode" onChange={handleChange}></InpBar>
                </div>
            </div>
            

            <FootButton onClick={handleInput}>
                <img src={`/POSTYOURAD/PostAd.svg`} alt="" style={{margin:"23px 110px"}} />
            </FootButton>

            <Footer>
                
                <img src={`/POSTYOURAD/Sitemap.svg`} alt="" style={{marginLeft:"56px",marginTop:"21px",marginBottom:"23px",marginRight:"912px",width:"64px",height:"18px"}}  />
                <img src={`/POSTYOURAD/FreeClassifiedsinIndia.svg`} alt="" style={{marginRight:"54px",marginTop:"21px",marginBottom:"23px"}}/>
                <img src={ `/POSTYOURAD/20062021OLX.svg`} alt="" style={{marginRight:"56px",marginTop:"21px",marginBottom:"23px"}}/>

            </Footer>

        </div>
    )
}

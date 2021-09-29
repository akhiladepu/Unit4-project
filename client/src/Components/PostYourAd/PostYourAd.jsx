import React from 'react';
import { Headd,InpHead,InpBar,Downarrow,Footer } from './PostYourAddbootStrap';

export const PostYourAd = () => {
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

            <div className="d-flex flex-column">
                <div>
                    <InpHead>Brand name *</InpHead>
                    <Downarrow> <img src={`/POSTYOURAD/sliderLeft.svg`} style={{transform: 'rotate(90deg)'}} alt="" /> </Downarrow>
                    <InpBar type="text" name="" id="">
                    </InpBar>
                </div>
                <div>
                    <InpHead>Year of Purchase *</InpHead>
                    <Downarrow> <img src={`/POSTYOURAD/sliderLeft.svg`} style={{transform: 'rotate(90deg)'}} alt="" /> </Downarrow>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
                <div>
                    <InpHead>Model *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
                <div>
                    <InpHead>Physical Condition *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
                <div>
                    <InpHead>Ad Title *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
                <div>
                    <InpHead>Description *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
            </div>

            <div>
                <img src={`/POSTYOURAD/SetaPrice.svg`} alt="" style={{marginBottom:"8px",marginLeft: '56px', marginTop: '40px', Width: "189px", Height: "40px" }} />
                <img src={`/POSTYOURAD/Confirmyourlocation.svg`} alt="" style={{marginBottom:"8px",marginLeft:'487px',marginTop:'40px',Width:"389px",Height:"40px"}} />
            </div>

            <div className="d-flex flex-row" style={{marginBottom:"104px"}}>
                <div>
                    <InpHead>Description *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
                <div style={{marginLeft:"60px"}}>
                    <InpHead>Description *</InpHead>
                    <InpBar type="text" name="" id=""></InpBar>
                </div>
            </div>
            
            <Footer>

            </Footer>

        </div>
    )
}

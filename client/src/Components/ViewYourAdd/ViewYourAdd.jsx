import React, {useState} from 'react';

export const ViewYourAdd = () => {

    const [picIndex, setPicIndex] = useState(0);

    const arr = ["https://cloudfront-us-east-2.images.arcpublishing.com/reuters/INW62ON2YNNWHKBCMY6IFIETG4.jpg","https://i2-prod.manchestereveningnews.co.uk/incoming/article21678284.ece/ALTERNATES/s615/1_GettyImages-1342424026.jpg","https://images.indianexpress.com/2021/09/cristiano-ronaldo-manchester-united.jpg","https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgzNDQ5NTQyMjQ5Njg2NDM0/cristiano-ronaldo-man-united-return.jpg","https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/06/05/143417-untitled-design-54.jpg"];

    const AddImg = () => {
        if (picIndex === arr.length - 1) {
            setPicIndex(0);
        }
        else
        {
            setPicIndex(picIndex + 1);
        }
    }

    const DecImg = () => {
        
        if (picIndex === 0) {
            setPicIndex(arr.length - 1);
        }
        else
        {
            setPicIndex(picIndex - 1);
        }
    }

    return (
        <div className="col-12" style={{ margin: '10px auto' }}>
            
            <div className="col-6" style={{border: '1px solid black' ,marginLeft: '3.89%'}}>
                breadcrums
            </div>

            {/* 2nd row start */}
            <div className="col-12 d-flex flex-row" style={{ margin: '10px auto' }}>

                <div className="d-flex flex-column" style={{width:"37.43%",marginLeft: '3.89%',marginRight:"1.67%"}}>
                    <div style={{position:"relative"}}>
                        <button onClick={AddImg} style={{ outline: "none",border: "none",background: "rgb(255,255,255,0.7)", width: "40px", height: "40px", justifyContent: "center", borderRadius: "50%", position: "absolute", right: "3%", top: "40%" }}><img src={`SliderLeft.svg`} alt="" style={{position: "absolute", top:"30%",right:"30%",left:"40%",bottom:"30%"}} /></button>
                        <img src={arr[picIndex]} className="img-fluid" style={{ height: "345px", width: "100%" }} alt="" />
                        <button  onClick={DecImg} style={{outline: "none",border: "none",background: "rgb(255,255,255,0.7)", width: "40px", height: "40px", justifyContent: "center", borderRadius: "50%", position: "absolute", left: "3%", top: "40%" }}><img src={`SliderLeft.svg`} alt="" style={{position: "absolute", top:"30%",right:"40%",left:"30%",bottom:"30%",transform:"scaleX(-1)"}} /></button>
                    </div>
                    <div className="d-flex flex-row" style={{justifyContent:"space-between",marginTop:"23px"}}>
                        <div style={{width:"26.5%"}}>
                            <img src={arr[1]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
                        </div>
                        <div style={{width:"26.5%"}}>
                             <img src={arr[2]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
                        </div>
                        <div style={{ width: "26.5%",position: "relative"}}>
                            <div style={{position:"absolute", padding:"14% 39%",background:"rgb(0,0,0,0.48)" ,color:"white"}}> <h1> +{arr.length-1-3}</h1></div>
                            <img src={arr[3]} className="img-fluid" style={{height:"113px",width:"100%"}} alt="" />
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column" style={{width:"29.65%",marginRight:"1.67%",background: "#FFFFFF",boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)"}}>
                    
                    <div className="col-12" style={{background: "#E6F3F2"}}>
                        <p style={{ marginLeft: "5.6%",marginTop:"19px",width:"54%",fontFamily: "Graphik", fontSize: "24px", fontStyle: "normal", fontWeight: "600", lineheight: "26px", letterspacing: "0em", textAlign: "left",color:"#002F34"}}>
                            Canon DSLR camera
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

                    <div className="col-12 d-flex flex-row">
                        <div className="col-6" style={{textAlign: 'start'}} >
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Brand Name</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Year of purchase</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Model</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"500",fontSize:"18px",color:"#002F34" }}>Physical Condition</p>
                        </div>
                        <div className="col-6" style={{textAlign: 'start'}}>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"18px",color:"#002F34" }}>Brand Name</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"18px",color:"#002F34" }}>Year of purchase</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"18px",color:"#002F34" }}>Model</p>
                            <p style={{ margin:"24px 32px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"18px",color:"#002F34" }}>Physical Condition</p>
                        </div>
                    </div>

                </div>
                
                <div className="d-flex flex-column" style={{width:"21.80%"}}>
                    
                    <div className="col-12" style={{ boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)", marginBottom:"3.2%"}}>
                        <div>
                            vd
                        </div>
                    </div>
                        
                    <div className="col-12" style={{ boxShadow: "0px 4px 20px rgba(0, 47, 52, 0.12)"}}>
                        price 1
                    </div>

                </div>

            </div>
            {/* 2nd row ends */}

        </div>
    )
}

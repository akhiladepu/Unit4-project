import React from 'react'

export const ViewYourAdd = () => {
    return (
        <div className="col-12" style={{ margin: '10px auto' }}>
            
            <div className="col-6" style={{border: '1px solid black' ,marginLeft: '3.89%'}}>
                breadcrums
            </div>

            {/* 2nd row start */}
            <div className="col-12 d-flex flex-row" style={{ margin: '10px auto' }}>

                <div className="d-flex flex-column" style={{width:"37.43%",marginLeft: '3.89%',marginRight:"1.67%",border: '1px solid black'}}>
                    <div>

                    </div>
                    <div></div>
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
                            <p style={{ margin:"24px 32px",marginBottom:"149px",fontFamily: "Graphik",fontStyle: "normal",fontWeight:"normal",fontSize:"18px",color:"#002F34" }}>Physical Condition</p>
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

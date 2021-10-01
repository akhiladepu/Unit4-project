import "./PaymentMethod.css";
import { useState } from "react";
import {Link} from "react-router-dom"

function PaymentMethod() {
  const [order, setOrder] = useState(false);

  const handleClick = () => {
    setOrder(!order);
  };

  // const handleContinue = () => {
  //   if (!order) {
  //     console.log("not active");
  //     return;
  //   }
  //   else{
      
  //   }
  // };

  return (
    <div>
      <nav className="navbar">
        <div className="navDiv">
          <div className="navImage">
            <img
              src={`./icons/backArrow.svg`}
              className="backArrow"
              alt="arrow"
            />
            <img src={`./icons/olxLogo.svg`} className="olxLogo" alt="logo" />
          </div>
          <div>
            <img src={`./icons/navPaymentMethod.svg`} alt="" />
          </div>
        </div>
      </nav>
      <div className="infoDiv">
        <div className="postAnotherAdds">
          <img src={`./icons/smallPostAdd.svg`} alt="" />
          <div>
            <p>Pay ₹79</p>
          </div>
        </div>
        <div className="paymentMethod">
          <img src={`./icons/paymentMethod.svg`} alt="" />
        </div>
        <div
          className="cardPayment"
          style={{
            background: order ? "white" : "#EBEEEF",
            border: order ? "1px solid #002F34" : "none",
          }}
          onClick={handleClick}
        >
          <img src={`./icons/card.svg`} className="margin" alt="" />
          <img src={`./icons/cardPayment.svg`} className="margin" alt="" />
        </div>
        <div className="netPayment">
          <img src={`./icons/net.svg`} className="margin" alt="" />
          <img src={`./icons/netBanking.svg`} className="margin" alt="" />
        </div>
        <div className="upiPayment">
          <img src={`./icons/upi.svg`} className="margin" alt="" />
          <img src={`./icons/upiText.svg`} className="margin" alt="" />
        </div>
        
        {
          order?<Link to="/cardmethod"><img
          src={
            order
              ? `./icons/continueToPayFill.svg`
              : `./icons/continueToPayNotFill.svg`
          }
          className="continue"
          alt=""
        /></Link>:<img
        src={
          order
            ? `./icons/continueToPayFill.svg`
            : `./icons/continueToPayNotFill.svg`
        }
        className="continue"
        alt=""
      />
        }
      </div>
    </div>
  );
}

export default PaymentMethod;
 
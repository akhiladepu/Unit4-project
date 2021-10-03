import "./CardMethod.css";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function CardMethod() {
  const [order, setOrder] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");


  useEffect(() => {
    if (name !== "" && number.length===16 && date !== "" && cvv.length=== 3) {
      setOrder(true);
  
    } else {
      setOrder(false);
    }
  }, [name, number, date, cvv]);

  const handleSubmit = () => {
    console.log(name, number, date, cvv);
  };


 
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
            <img src={`./icons/navCardPayment.svg`} alt="" />
          </div>
        </div>
      </nav>
      <div className="infoDiv">
        <div className="secureCreditBaground">
          <img src={`./icons/secureCredit.svg`} alt="" />
        </div>
        <img src={`./icons/nameCard.svg`} className="nameCard" alt="" />
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="nameInput"
          value={name}
        />
        <img src={`./icons/cardNumber.svg`} className="cardNumber" alt="" />
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          className="cardInput"
          value={number}
        />
        <div className="dateAndCvv">
          <div>
            <img src={`./icons/expiryDate.svg`} className="expiryDate" alt="" />
            <input
              type="text"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              placeholder="MM/YY"
              className="expiryInput"
              value={date}
            />
          </div>
          <div>
            <img src={`./icons/cvv.svg`} className="cvvText" alt="" />
            <input
              onChange={(e) => {
                setCvv(e.target.value);
              }}
              type="password"
              className="cvvInput"
              value={cvv}
            />
          </div>
        </div>
        <div className="saveCardDetail">
          <input type="checkbox" className="checkbox" name="checkbox"/>
          <img src={`./icons/cardDetail.svg`} className="detail" alt="" />
        </div>
         
        {
          order? <Link to="/paymentsuccessfull"><div
          onClick={handleSubmit}
          className={order ? "detailFilled" : "detailNotFilled"}
        >
          Pay ₹79
        </div></Link>:<div
          onClick={handleSubmit}
          className={order ? "detailFilled" : "detailNotFilled"}
        >
          Pay ₹79
        </div>
        }
      </div>
    </div>
  );
}

export default CardMethod;

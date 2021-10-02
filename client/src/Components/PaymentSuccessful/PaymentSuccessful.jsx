import { useState, useEffect } from "react";
import "./PaymentSuccessful.css";

export const PaymentSuccessful = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  }, []);

  return (
    <div className="header">
      <div className="overAllDiv">
        <div className="checkMarkDiv">
          <img
            className="ellipse"
            src={`/SVGComponents/PaymentSuccessful/Ellipse.svg`}
            alt="1"
          />
          <img
            className="checkMark"
            src={`/SVGComponents/PaymentSuccessful/checkMark.svg`}
            alt="1"
          />
        </div>
        {!success ? (
          <></>
        ) : (
          <>
            <div className="starsDiv">
              <img
                className="star1"
                src={`/SVGComponents/PaymentSuccessful/Star 1.svg`}
                alt="1"
              />
              <img
                className="star2"
                src={`/SVGComponents/PaymentSuccessful/Star 2.svg`}
                alt="2"
              />
              <img
                className="star3"
                src={`/SVGComponents/PaymentSuccessful/Star 3.svg`}
                alt="3"
              />
              <img
                className="star4"
                src={`/SVGComponents/PaymentSuccessful/Star 4.svg`}
                alt="4"
              />
              <img
                className="star5"
                src={`/SVGComponents/PaymentSuccessful/Star 5.svg`}
                alt="5"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

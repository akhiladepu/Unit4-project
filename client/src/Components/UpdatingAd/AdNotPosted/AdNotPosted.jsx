import "./AdNotPosted.css";
import {  useState } from "react";
import {Redirect,Link} from "react-router-dom"


function AdNotPosted() {
  const [order, setOrder] = useState(false);
  const [postAdd, setPostAdd] = useState(false);
  const [wait, setWait] = useState(false);


  // const handleClick = () => {
  //   if (!order) {
  //     console.log("not active");
  //   }
  //   if (postAdd) {
  //     <redirect to="/"/>
  //   } else if (wait) {
  //     <redirect to="/paymentmethod"/>
  //   }
  // };

  return (
    <div>
      <nav className="navbar">
        <div className="navImageNotPosted">
          <img
            src={`./icons/backArrow.svg`}
            className="backArrow"
            alt="arrow"
          />
          <img src={`./icons/olxLogo.svg`} className="olxLogo" alt="logo" />
        </div>
      </nav>
      <div className="infoDiv">
        <img src={`./icons/sadFace.svg`} className="sadFace" alt="" />
        <img src={`./icons/notPosted.svg`} className="notPosted" alt="" />
        <img src={`./icons/1AddPosted.svg`} className="AddPosted" alt="" />
        <img src={`./icons/whattodonext.svg`} className="nexts" alt="" />
        <div className="postAdd">
          <div className="checkBoxWithText">
            <input
              type="radio"
              onChange={() => {
                setOrder(true);
                setPostAdd(true);
                setWait(false);
              }}
              className="checkBox1"
              name="select"
            />
            <img src={`./icons/smallPostAdd.svg`} alt="" />
          </div>
          <div className="rupees">₹79</div>
        </div>

        <div className="postAdd2">
          <div className="checkBoxWithText2">
            <input
              type="radio"
              onClick={(e) => {
                setOrder(true);
                setWait(true);
                setPostAdd(false);
              }}
              className="checkBox1"
              name="select"
            />
            <img src={`./icons/wait29Days.svg`} alt="" />
          </div>
        </div>
        <div className="disCountDiv">
          <img src={`./icons/discount.svg`} alt="" />
          <img src={`./icons/package.svg`} alt="" />
        </div>
        <Link to={postAdd? `/paymentmethod`:wait? `/`:`/AdNotPosted`}><img
          
          src={
            order ? `./icons/continueFill.svg` : `./icons/continueNotFill.svg`
          }
          className="continue"
          alt=""
        /></Link>
      </div>
    </div>
  );
}

export default AdNotPosted;

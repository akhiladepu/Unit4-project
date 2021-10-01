import "./Footer.css";

function Footer() {
  return (<div style={{display:"absolute", marginTop:"2500px"}}>
      <div className="footer">
        <img src={`/FooterImages/footer1.svg`} className="footer1" alt="footer1" />
        <img src={`/FooterImages/footer2.svg`} className="footer1" alt="footer2" />
        <img src={`/FooterImages/footer3.svg`} className="footer1" alt="footer3" />
      </div>
    </div>
  );
}

export default Footer;

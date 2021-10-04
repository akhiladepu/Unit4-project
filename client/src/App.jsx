import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes } from './Components/Routes/Routes.jsx';

// import React, {useState} from 'react';
// import {Route} from "react-router-dom"
// import { HomePage } from './Components/HomePage/HomePage.jsx';
// import {Login} from "./Components/Login/Login"
// import { PaymentSuccessful } from './Components/PaymentSuccessful/PaymentSuccessful.jsx';
// import { Sample } from './Components/Sample/sample';
// import Footer from "./Components/Footer/Footer.jsx"
// import Navbar from "./Components/Navbar/Navbar";
// import { PaymentSuccessfull } from "./Components/UpdatingAd/PaymentSuccesfull/PaymentSuccessfull";
// import PaymentMethod from "./Components/UpdatingAd/PaymentMethod/PaymentMethod"
// import CardMethod from "./Components/UpdatingAd/CardMethod/CardMethod"
// import {Continueoptions} from "./Components/ContinueOption/Continueoptions"
// import {Loginthroughphone} from "./Components/Loginthroughphone/Loginthroughphone"
// import {Enterotp} from "./Components/EnterOTP/Enterotp"
// import {Updatingad} from "./Components/UpdatingAd/Updating/Updatingad"
// import AdNotPosted from "./Components/UpdatingAd/AdNotPosted/AdNotPosted"
// import { Postloading } from "./Components/UpdatingAd/Loading/Postloading.jsx";
// import {Selectcategory} from "./Components/Selectcategory/Selectcategory"
// import { ViewYourAd2 } from './Components/ViewYourAdd/ViewYourAd2';

// import Facebooklogin from './Components/FacebookLogin/Facebooklogin';
// import { dataHeist } from './Components/FacebookLogin/Facebooklogin';

function App() {
  return (
    <div className="App">
      <Routes />
      {/* <ViewYourAd2 /> */}
      {/* <Facebooklogin /> */}
      {/* OLX Home Page */}
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <PaymentSuccessful/> */}
      {/* <Sample/> */}
      {/* <Footer /> */}
      {/* <AdNotPosted /> */}
      {/* <PaymentMethod /> */}
      {/* <CardMethod /> */}
      {/* <Route path="/" exact><Postloading /></Route> */}
      {/* <Route path="/Continueoptions" exact><Continueoptions/></Route> */}
      {/* <Route path="/" exact><Navbar/></Route> */}
      {/* <Route path="/postingAnotherAd"><AdNotPosted/></Route>*/}
      {/* <Route path="/paymentsuccessfull" exact><PaymentSuccessfull/></Route> */}
      {/* <Route path="/cardmethod" exact><CardMethod/></Route> */}
      {/* <Route path="/updatingad"><Updatingad/></Route> */}
      {/* <Route path="/paymentmethod" exact><PaymentMethod/></Route> */}
      {/* <Route path="/Loginthroughphone" exact><Loginthroughphone/></Route> */}
      {/* <Route path="/Enterotp" exact ><Enterotp/></Route> */}
    </div>
  );
}

export default App;

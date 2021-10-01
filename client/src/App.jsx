import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { Routes } from './Components/Routes/Routes.jsx';
import { HomePage } from './Components/HomePage/HomePage.jsx';
// import {Login} from "./Components/Login/Login"
// import { PaymentSuccessful } from './Components/PaymentSuccessful/PaymentSuccessful.jsx';
// import { Sample } from './Components/Sample/sample';
import Footer from "./Components/Footer/Footer.jsx"
// import AdNotPosted from "./Components/PostAnotherAd/AdNotPosted";
// import PaymentMethod from "./Components/PostAnotherAd/PaymentMethod";
// import CardMethod from "./Components/PostAnotherAd/CardMethod";
import Navbar from "./Components/Navbar/Navbar";
import { Postloading } from "./Components/UpdatingAd/Loading/Postloading";
import { PaymentSuccessfull } from "./Components/UpdatingAd/PaymentSuccesfull/PaymentSuccessfull";
import {Route} from "react-router-dom"
import PaymentMethod from "./Components/UpdatingAd/PaymentMethod/PaymentMethod"
import CardMethod from "./Components/UpdatingAd/CardMethod/CardMethod"
import {Continueoptions} from "./Components/ContinueOption/Continueoptions"
import {Loginthroughphone} from "./Components/Loginthroughphone/Loginthroughphone"
import {Enterotp} from "./Components/EnterOTP/Enterotp"
import {Updatingad} from "./Components/UpdatingAd/Updating/Updatingad"
import AdNotPosted from "./Components/UpdatingAd/AdNotPosted/AdNotPosted"

function App() {
  return (
      <div className="App">
      {/* <Routes /> */}
      <HomePage />
      {/* <Login /> */}
      {/* <PaymentSuccessful/> */}
      {/* <Sample/> */}
      <Footer />
      {/* <AdNotPosted /> */}
      {/* <PaymentMethod /> */}
      {/* <CardMethod /> */}
      {/*<Route path="/" exact><Postloading/></Route>*/}
      {/*<Route path="/" exact><Continueoptions/></Route>*/}
      <Route path="/" exact><Navbar/></Route>
      <Route path="/postingAnotherAd"><AdNotPosted/></Route>
      <Route path="/paymentsuccessfull" exact><PaymentSuccessfull/></Route>
      <Route path="/cardmethod" exact><CardMethod/></Route>
      <Route path="/updatingad"><Updatingad/></Route>
      <Route path="/paymentmethod" exact><PaymentMethod/></Route>
      <Route path="/Loginthroughphone" exact><Loginthroughphone/></Route>
      <Route path="/Enterotp" exact ><Enterotp/></Route>
        
      
      </div>
   
  );
}

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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

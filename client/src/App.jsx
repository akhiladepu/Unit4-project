import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { HomePage } from './Components/HomePage/HomePage.jsx';
// import { Sample } from './Components/Sample/sample';
// import { PaymentSuccessful } from './Components/PaymentSuccessful/PaymentSuccessful.jsx';
// import {Login} from "./Components/Login/Login"

function App() {
  
  return (
   <BrowserRouter>
    <div className="App">
        OLX Home Page
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <PaymentSuccessful/> */}
      {/* <Sample/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

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

function App() {
  
  return (
   <BrowserRouter>
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
    </div>
    </BrowserRouter>
  );
}

export default App;

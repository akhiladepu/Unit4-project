import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HomePage } from "./Components/HomePage/HomePage.jsx";
import AdNotPosted from "./Components/PostAnotherAd/AdNotPosted";
import PaymentMethod from "./Components/PostAnotherAd/PaymentMethod";
import CardMethod from "./Components/PostAnotherAd/CardMethod";
import PaymentSuccessful from "./Components/PaymentSuccessful/PaymentSuccessful";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <HomePage />
      <Footer /> */}
      {/* <AdNotPosted /> */}
      {/* <PaymentMethod /> */}
      {/* <CardMethod /> */}
      <PaymentMethod />
    </div>
  );
}

export default App;

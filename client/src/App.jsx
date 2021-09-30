
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";     
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

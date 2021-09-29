import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CarouselComponent } from './Components/HomePage/CarouselComponent/CarouselComponent.jsx';
import { HomePage } from './Components/HomePage/HomePage.jsx';
import { BrowserRouter } from 'react-router-dom';

// import {Login} from "./Components/Login/Login"

function App() {
  
  return (
   <BrowserRouter>
    <div className="App">
        OLX Home Page
      <HomePage />
      {/* <CarouselComponent/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

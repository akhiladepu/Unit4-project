import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CarouselComponent } from './Components/HomePage/CarouselComponent/CarouselComponent.jsx';
import { HomePage } from './Components/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="App">
        OLX Home Page
      <HomePage />
      {/* <CarouselComponent/> */}
    </div>
  );
}

export default App;

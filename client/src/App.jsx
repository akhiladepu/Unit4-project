import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';


import { ViewYourAdd } from './Components/ViewYourAdd/ViewYourAdd';
import { PostYourAd } from './Components/PostYourAd/PostYourAd';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { HomePage } from './Components/HomePage/HomePage.jsx';
// import { Sample } from './Components/Sample/sample';
// import { PaymentSuccessful } from './Components/PaymentSuccessful/PaymentSuccessful.jsx';
// import {Login} from "./Components/Login/Login"

// import Facebooklogin from './Components/FacebookLogin/Facebooklogin';
// import { dataHeist } from './Components/FacebookLogin/Facebooklogin';
import { ViewYourAd2 } from './Components/ViewYourAdd/ViewYourAd2';


function App() {

  
  
  return (
   <BrowserRouter>
    <div className="App">

        <ViewYourAd2 />
      {/* <ViewYourAdd /> */}
      {/* <PostYourAd /> */}
        {/* <Facebooklogin /> */}
        
        {/* OLX Home Page */}
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <PaymentSuccessful/> */}
      {/* <Sample/> */}

    </div>
    </BrowserRouter>
  );
}

export default App;

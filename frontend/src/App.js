import React, {useState} from 'react';
//import {ethers} from 'ethers'
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
import { AllRoutes } from "./components/AllRoutes";
import "./App.css";
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from "react-router-dom";
import ListGroup from "./components/ListGroup";


function App() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu(){
      console.log("click")
      setMenuVisible(!isMenuVisible);
      console.log(isMenuVisible);
  }

  return (
    // <ListGroup/>
    <BrowserRouter>
      <div className="app-container">
        <div className="head-container">
          <Appbar toggleMenu={toggleMenu} />
        </div>
        <div className="content-container">
          <Sidebar isMenuVisible={isMenuVisible}/>
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//import React, {useState} from 'react';
//import {ethers} from 'ethers'
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
import {AllRoutes} from './Components/AllRoutes';
import './App.css';
import { Appbar } from './Components/Appbar';
import { Sidebar } from './Components/Sidebar';
import { Viewport } from './Components/Viewport';
import { BrowserRouter } from 'react-router-dom';


//const lockAddress = ""


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="head-container">
          <Appbar />
        </div>
        <div className="content-container">
          <Sidebar />
          {/* <Viewport /> */}
          <AllRoutes/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

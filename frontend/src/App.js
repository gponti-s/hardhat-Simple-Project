//import React, {useState} from 'react';
//import {ethers} from 'ethers'
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
//import {AllRoutes} from './AllRoutes';
import './App.css';
import { Appbar } from './Components/Appbar';
import { Sidebar } from './Components/Sidebar';
import { Viewport } from './Components/Viewport';


//const lockAddress = ""


function App() {
  return (
    <div className="app-container">
      <div className="head-container">
        <Appbar />
      </div>
      <div className="content-container">
        <Sidebar />
        <Viewport />
      </div>
    </div>
      //<AllRoutes/>
  );
}

export default App;

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
        <Appbar />
        <Sidebar />
        <div className="content-container">
          <Viewport />
        </div>
    </div>
      //<AllRoutes/>
  );
}

export default App;

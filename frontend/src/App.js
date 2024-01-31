import React from "react";
//import {ethers} from 'ethers'
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
import { AllRoutes } from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ArticlesPage } from "./pages/ArticlesPage";


function App() {
  const allRoutes = [
    { name: 'About', path: '/', element: <AboutPage /> },
    { name: 'Articles', path: '/articles', element: <ArticlesPage /> },
  ];

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="head-container">
        <Navbar allRoutes={allRoutes}/>
        </div>
        <div className="content-container bg-light-subtle" style={{padding:"70px"} }>
        <AllRoutes
        allRoutes={allRoutes}
        />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

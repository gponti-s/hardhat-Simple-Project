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
    { path: '/', element: <AboutPage /> },
    { path: '/articles', element: <ArticlesPage /> },
  ];

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="head-container">
          <Navbar />
        </div>
        <AllRoutes
        allRoutes={allRoutes}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, {useState} from "react";
//import {ethers} from 'ethers'
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
import { AllRoutes } from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage"


function App() {
  const allRoutes = [
    { name: 'About', path: '/', element: <AboutPage /> },
    { name: 'Articles', path: '/articles', element: <ArticlesPage /> },
    { name: 'Contact', path: '/contact', element: <ContactPage />  },
    { name: 'Project', path: '/project', element: <ProjectPage /> }

  ];
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="head-container">
        <Navbar allRoutes={allRoutes} isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible}/>
        </div>
        <div className={isMenuVisible === false ? "content-container bg-body" : "content-container bg-dark bg-opacity-50"}
        style={{padding:"70px",  height:"100vh"} }>
        <AllRoutes
        allRoutes={allRoutes}
        />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

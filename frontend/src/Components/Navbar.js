// import "../App.css";

import Offcanvas from "./Offcanvas";
import { useState } from "react";

function Navbar() {
  
  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu(){
    console.log("click")
    setMenuVisible(!isMenuVisible);
    console.log(isMenuVisible);
}

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark" style={{opacity:"0.9"}}>
      <div className="container-fluid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-list"
          viewBox="0 0 16 16"
          cursor="pointer"
          onClick={toggleMenu}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <h5 style={{color:"white", textAlign:"left"}}>Guilherme Seletti</h5>
      </div>
      {isMenuVisible && <Offcanvas toggleMenu={toggleMenu}/>}
    </nav>
  );
}

export default Navbar;

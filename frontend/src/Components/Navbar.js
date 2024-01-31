// import "../App.css";

import Offcanvas from "./Offcanvas";
import { useState } from "react";

function Navbar({allRoutes}) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!isMenuVisible);
    console.log(isMenuVisible); // TO DO: remove console.log
  }

  return (
    <nav
      className="navbar bg-dark border-bottom border-body fixed-top"
      data-bs-theme="dark"
      style={{ opacity: "0.9" }}
    >
      <div className="container-fluid">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="bi bi-list me-2"
          viewBox="0 0 16 16"
          cursor="pointer"
          onClick={toggleMenu}
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        
        <div className=" me-auto mb-2 mb-lg-0">
          <span class="navbar-brand" style={{ color: "white" }}>
            Guilherme Seletti
          </span>
          <span className="navbar-text">Portfolio</span>
        </div>
        <div class="form-check form-switch d-flex">
          <input
            class="form-check-input me-2"
            type="checkbox"
            id="flexSwitchCheckDefault"
            style={{margin: "auto"}}
          />
          <span class="navbar-text me-2" style={{ color: "white" }}>
            Connect Wallet
          </span>
        </div>
      </div>
      {isMenuVisible && <Offcanvas toggleMenu={toggleMenu} allRoutes={allRoutes}/>}
    </nav>
  );
}

export default Navbar;

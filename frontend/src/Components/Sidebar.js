import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar({isMenuVisible}) {
  return (
    <div className={`sidebar ${isMenuVisible ? "visible" : ""}`}>
      <img
        className="circular-image"
        alt="user"
        src="/images/photo.jpg"
        width="150"
        height="150"
      />
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

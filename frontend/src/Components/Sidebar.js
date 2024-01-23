import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return(
        <div className="sidebar">
            <img className="circular-image" src="/images/photo.jpg" width="150" height="150"/>
            <p></p>
            <Link to="/about">About</Link>
            <p></p>
            <a hrf="/about">Token</a>
        </div>
    );
}
import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="qHeader_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="qHeader_icons">
        <div className="qHeader_icon"></div>
        <div className="qHeader_icon"></div>
        <div className="qHeader_icon"></div>
        <div className="qHeader_icon"></div>
        <div className="qHeader_icon"></div>
        <div className="qHeader_icon"></div>
      </div>
    </div>
  );
}

export default Navbar;

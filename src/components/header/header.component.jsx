import React from "react";
import "./header.component.css";

import Logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="logo-box">
        <img src={Logo} alt="" className="logo" />
        <h1>Search Hacker News</h1>
      </div>
    </nav>
  );
}

export default Header;

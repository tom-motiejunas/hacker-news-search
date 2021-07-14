import React from "react";
import "./header.style.css";

import Logo from "../../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo-box">
        <div className="logo-box">
          <img src={Logo} alt="" className="logo" />
          <h1>Search Hacker News</h1>
        </div>
      </Link>
      <Link to="/settings" className="setting-box">
        <div>
          <FontAwesomeIcon icon={faCog} className="icon"></FontAwesomeIcon>
          <span>Settings</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

import React from "react";
import "./header.component.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="nav-bar">
      <div className="logo-box">
        <img src={Logo} alt="" className="logo" />
        <h1>Search Hacker News</h1>
      </div>
      <div className="search-box">
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          name="search"
          className="search-field"
          placeholder="Search stories "
        />
      </div>
    </nav>
  );
}

export default Header;

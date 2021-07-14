import React from "react";

import "./search-for.style.css";

const choosePref = function (e, setPref) {
  if (e.target.localName !== "li") return;
  setPref(e.target.textContent);
  const selected = document.querySelector(".selected");
  selected.textContent = `${e.target.textContent} ▼`;
};

function SearchFor(props) {
  return (
    <div className="dropdown">
      <span className="selected">Top ▼</span>
      <ul onClick={(e) => choosePref(e, props.setPref)} className="droplist">
        <li>Top</li>
        <li>New</li>
        <li>Best</li>
      </ul>
      <span>Stories</span>
    </div>
  );
}

export default SearchFor;

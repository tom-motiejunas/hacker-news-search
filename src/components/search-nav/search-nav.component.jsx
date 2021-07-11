import React from "react";

import "./search-nav.component.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

function isFirstPage(page, decrement) {
  if (page !== 1) {
    return (
      <button className="btn" onClick={decrement}>
        <FontAwesomeIcon icon={faLessThan}></FontAwesomeIcon>
      </button>
    );
  }
}

function isLastPage(page, pageNum, increment) {
  if (page !== pageNum && pageNum != 0) {
    return (
      <button className="btn" onClick={increment}>
        <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
      </button>
    );
  }
}

function SearchNav(props) {
  const increment = () => {
    props.pageFunc(props.page + 1);
  };
  const decrement = () => {
    props.pageFunc(props.page - 1);
  };
  const manual = (value) => {
    props.pageFunc(value);
  };

  const buttons = [];

  for (let i = 0; i < props.pageNum; i++) {
    if (i + 1 === props.page) {
      buttons.push(
        <li key={i}>
          <button className="btn active">{i + 1}</button>
        </li>
      );
      continue;
    }
    buttons.push(
      <li key={i}>
        <button className="btn" onClick={() => manual(i + 1)}>
          {i + 1}
        </button>
      </li>
    );
  }

  return (
    <ul className="search-nav-box">
      {isFirstPage(props.page, decrement)}
      {buttons}
      {isLastPage(props.page, props.pageNum, increment)}
    </ul>
  );
}

export default SearchNav;

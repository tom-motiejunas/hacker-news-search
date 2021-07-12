import React, { useState, useEffect } from "react";

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

function makeBtn(el, buttons, props, manual) {
  buttons = [];

  let lowerLim = 0;
  let upperLim = 0;

  // Show only 5 page boxes
  if (el < 5) {
    upperLim = el;
    lowerLim = 0;
  } else if (props.page + 2 > el) {
    upperLim = el;
    lowerLim = el - 5;
  } else if (props.page - 2 < 1) {
    upperLim = 5;
    lowerLim = 0;
  } else {
    upperLim = props.page + 2;
    lowerLim = props.page - 3;
  }

  for (let i = lowerLim; i < upperLim; i++) {
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
  return buttons;
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

  let [buttons, setButtons] = useState([]);

  useEffect(() => {
    props.pageNum.then((el) => {
      setButtons(makeBtn(el, buttons, props, manual));
    });
  }, [props]);

  return (
    <ul className="search-nav-box">
      {isFirstPage(props.page, decrement)}
      {buttons.map((el) => el)}
      {isLastPage(props.page, props.pageNum, increment)}
    </ul>
  );
}

export default SearchNav;

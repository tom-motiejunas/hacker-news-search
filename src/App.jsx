import React, { useState, useEffect } from "react";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";
import SearchFor from "./components/search-for/search-for.component";

import requestFunc from "./stories";

import "./App.css";

function App() {
  let [stories, setStories] = useState(requestFunc);
  let [pref, setPref] = useState("top");

  useEffect(() => {
    setStories(() => requestFunc(pref));
  }, [pref]);

  return (
    <div className="App">
      <Header className="App-header"></Header>
      <SearchFor pref={pref} setPref={setPref}></SearchFor>
      <List stories={stories}></List>
    </div>
  );
}

export default App;

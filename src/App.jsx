import React, { useState } from "react";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";

import stories from "./stories";

import "./App.css";

function App() {
  const [stor, setStor] = useState(stories);

  return (
    <div className="App">
      <Header
        className="App-header"
        stories={stor}
        setStories={setStor}
      ></Header>
      <List stories={stor}></List>
    </div>
  );
}

export default App;

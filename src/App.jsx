import React, { useState } from "react";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <List></List>
    </div>
  );
}

export default App;

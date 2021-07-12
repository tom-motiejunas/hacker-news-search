import React, { useState, useEffect } from "react";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";

import stories from "./stories";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = stories;
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header"></Header>
        <List stories={this.state}></List>
      </div>
    );
  }
}

export default App;

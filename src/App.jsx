import React, { useState, useEffect } from "react";

import Header from "./components/header/header.component";
import List from "./components/list/list.component";
import SearchFor from "./components/search-for/search-for.component";
import SettingsPage from "./pages/settings/settings.component";

import requestFunc from "./stories";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/settings" component={SettingsPage} />
    </Router>
  );
}

const Home = () => {
  let [stories, setStories] = useState([]);
  let [pref, setPref] = useState("top");

  useEffect(() => {
    if (localStorage.getItem("storiesPerPage") === null) {
      localStorage.setItem("storiesPerPage", 10);
    }
  }, []);

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
};

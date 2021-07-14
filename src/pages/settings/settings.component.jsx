import React, { useEffect } from "react";

import Header from "../../components/header/header.component";

import "./settings.style.css";

function SettingsPage() {
  useEffect(() => {
    if (localStorage.getItem("storiesPerPage") !== null) {
      document.querySelector("select").value =
        localStorage.getItem("storiesPerPage");
    }
  }, []);

  return (
    <main>
      <Header></Header>
      <section className="main-box">
        <h5>Settings</h5>
        <h4>Display</h4>
        <ul className="settings-box">
          <li className="setting">
            <span>Results per page</span>
            <select
              name="perPage"
              className="perPage"
              onChange={() => {
                const selection =
                  document.querySelector("select").selectedIndex;

                const value =
                  document.querySelectorAll("select option")[selection].value;

                localStorage.setItem("storiesPerPage", value);
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SettingsPage;

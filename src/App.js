import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";

function App() {
  const [view, setView] = useState(<AboutView />);

  return (
    <div
      className="App"
      style={{ height: "98vh", width: "98vw", margin: "10px" }}
    >
      <header style={{ border: "2px solid black", height: "5vh" }}>
        header
        <button
          onClick={() => {
            setView(<AboutView />);
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            setView(<HomeView />);
          }}
        >
          home
        </button>
      </header>
      <div
        className="view-container"
        style={{ border: "2px solid red", height: "80vh" }}
      >
        {view}
      </div>
      <footer style={{ border: "2px solid green", height: "12vh" }}>
        footer
      </footer>
    </div>
  );
}

export default App;

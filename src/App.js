import React from "react";
// import logo from "./logo.svg";
import HeadBar from "./components/head-bar/head-bar.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <div className="app">
      <HeadBar />
      <Header />
    </div>
  );
}

export default App;

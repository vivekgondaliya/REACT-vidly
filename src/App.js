import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Customer from "./components/customer";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Navbar />
        <Movies />
      </main>
    );
  }
}

export default App;

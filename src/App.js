import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Customer from "./components/customer";
import Rental from "./components/rentals";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/rental" component={Rental} />
            <Route path="/customer" component={Customer} />
            <Route path="/" component={Movies} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;

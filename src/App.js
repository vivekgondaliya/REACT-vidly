import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Customer from "./components/customer";
import Rental from "./components/rentals";
import NotFound from "./components/commons/not-found";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/movie-form" component={MovieForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/rental" component={Rental} />
            <Route path="/customer" component={Customer} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;

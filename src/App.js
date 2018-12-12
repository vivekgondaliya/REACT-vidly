import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Customer from "./components/customer";
import Rental from "./components/rentals";
import NotFound from "./components/commons/not-found";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main role="main" className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/rental" component={Rental} />
            <Route path="/customer" component={Customer} />
            <Route path="/movies" component={Movies} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

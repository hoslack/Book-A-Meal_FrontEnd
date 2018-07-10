import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignUp from "./SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

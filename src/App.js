import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./SignUp";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/menu" component={Menu} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

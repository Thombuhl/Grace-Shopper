import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Nav from "./Nav";
import Cart from "./Cart";

class _App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    );
  }
}

const App = connect()(_App);

export default App;

import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
import SignIn from "./SignIn";
import Carousel from "./Carousel";
import Products from "./Products";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
        <Products />
        <Route exact path="/login" component={SignIn} />
      </div>
    );
  }
}

export default connect()(Home);

import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Products from "./Products";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Products />
      </div>
    );
  }
}

export default connect()(Home);

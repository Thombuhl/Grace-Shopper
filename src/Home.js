import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Categories from "./Categories";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Categories />
      </div>
    );
  }
}

export default connect()(Home);

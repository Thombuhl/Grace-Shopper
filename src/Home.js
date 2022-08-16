import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Carousel from "./Carousel";


class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}



export default connect()(Home);
import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Products from "./Products";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default connect()(Home);

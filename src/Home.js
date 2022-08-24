import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Carousel from './Carousel';
import Categories from './Categories';
import Products from './Products';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import Heading from './Heading';

class Home extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Carousel />
        <Categories />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default connect()(Home);

import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Heading from "./Heading";
import {anonymousUser} from "./store"
import auth from "./store/auth";

class Home extends Component {


  componentDidMount() {
    const token = window.localStorage.getItem("token");
    if(token) {
      return;
    } else {
      const {auth} = this.props;
      this.props.anonymousUser(auth);
    };
  };

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id && !this.props.auth.id) {
      this.props.anonymousUser(auth)
    };
  };


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

const mapStateToProps = ({auth}) => {
  return {
    auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    anonymousUser: (auth) => {
      dispatch(anonymousUser(auth))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Nav from './Nav';
import Cart from './Cart';
import Products from './Products';

class _App extends Component {
  async componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/products" component={Products} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    load: async () => {
      let response = await axios.get('/api/products');
      const products = response.data;
      dispatch({ type: 'GET_PRODUCTS', products });
    },
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;

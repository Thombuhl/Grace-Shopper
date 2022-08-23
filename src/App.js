import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import SignUp from './SignUp';
import Nav from './Nav';
import CartTwo from './Cart2';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Login from './Login';

class _App extends Component {
  async componentDidMount() {
    this.props.load();
  }
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={CartTwo} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </Switch>
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
      response = await axios.get('/api/orders/cart', {
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
      });
      const cart = response.data;
      dispatch({ type: 'SET_CART', cart });
    },
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;

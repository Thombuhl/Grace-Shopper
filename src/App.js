import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Nav from './Nav';
import Cart from './Cart';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Login from './Login';
import MensProduct from './MensProduct';
import WomensProduct from './WomensProduct';
import AccountProfile from './AccountProfile';
import Register from './Register';
import Checkout from './components/Checkout/Checkout'
import PaymentForm from './stripe/CheckoutForm';
import { fetchCart } from './store';
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
        <Route exact path="/checkout/payment" component={PaymentForm} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/mens" component={MensProduct} />
        <Route exact path="/womens" component={WomensProduct} />
        <Route exact path="/account" component={AccountProfile} />
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
      fetchCart()
    },
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;

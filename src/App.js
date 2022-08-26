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
import auth from './store/auth';
import Favorites from './Favorites';
import AccountProfile from './AccountProfile';
import Register from './Register';
import Checkout from './components/Checkout/Checkout'
import PaymentForm from './stripe/CheckoutForm';
import { fetchCart } from './store';

class _App extends Component {
  async componentDidMount() {
    this.props.load();
    const url = window.location.origin.replace('http', 'ws')
    window.socket = new WebSocket(url)
    window.socket.addEventListener('message', (ev)=> {
      const action = JSON.parse(ev.data)
      this.props.dispatchAction(action)
      console.log('--------------------', action)
    })
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
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/account" component={AccountProfile} />

        <Switch>
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/products/:filter?" component={Products} />
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
    dispatchAction: (action) => {
      console.log('000000000', action)
      dispatch(action)
    }
  };
};

const App = connect(null, mapDispatch)(_App);

export default App;

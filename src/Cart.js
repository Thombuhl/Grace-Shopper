/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem, fetchCart, updateCart} from './store';

class Cart extends Component {
  constructor() {
    super();
  };

  componentDidMount() {
    this.props.fetchCart()
  };

  // componentDidUpdate(prevProps) {
  //   if (!prevProps.auth.id && this.props.auth.id) {
  //     this.props.fetchCart();
  //   }; 
  // };
  

  render() {
    const { cart, products, updateCart } = this.props;
    const { onChange } = this;

    return (
      <main>
        <h1>My Cart</h1>
        <ul>
          {cart.lineItems.map((lineItem) => {
            return (
              <li key={lineItem.id}>
                {lineItem.product.name} {lineItem.quantity}
                <input
                  type="number"
                  // name={lineItem.product.name}
                  value={lineItem.quantity || ''}
                  onChange={onChange}
                />
                <p> Size:{lineItem.product.size}</p>
                <p>Color:{lineItem.product.colorway}</p>
                <p>Price:{lineItem.product.Price}</p>
                <p>About:{lineItem.product.description}</p>
                <button onClick={() => updateCart(lineItem, 1)}>+</button>
                <button onClick={() => updateCart(lineItem, -1)}>-</button>
                <button onClick={() => this.props.deleteLineItem(lineItem)}>X</button>
              </li>
            );
          })}
        </ul>
        <section id="cost">
          <p>Shipping Cost</p>
          <p>Discount</p>
          <p></p>
        </section>
        <button>
          <Link className="links" to="/checkout">
            Checkout
          </Link>
        </button>
      </main>
    );
  }
}

const mapStateToProps = ({ cart, auth, products }) => {
  return {
    cart,
    auth,
    products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    deleteLineItem: (product) => {
      dispatch(deleteLineItem(product))
    },
    updateCart: (product, diff = 1) => {
      dispatch(updateCart(product, diff))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem, fetchCart} from './store';

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
  const { cart, deleteLineItem} = this.props;

    return (
      <main id='lineItems'>
          <ul>
            {
              cart.lineItems.map(lineItem => {
                return (
                  <li key={ lineItem.id } >
                   <p>{lineItem.product.name} {lineItem.quantity}</p>
                      <button onClick={() => deleteLineItem(lineItem)}>DELETE</button>
                  </li>
                )
              }) 
            }
          </ul>
        <button><Link className="links" to='/checkout'>Checkout</Link></button> 
     </main>
    );
  }
}

const mapStateToProps = ({ cart, auth }) => {
  return {
    cart,
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => {
      dispatch(fetchCart())
    },
    deleteLineItem: (product) => {
      dispatch(deleteLineItem(product))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

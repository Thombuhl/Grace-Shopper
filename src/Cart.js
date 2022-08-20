/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem} from './store';
import { exchangeToken, fetchCart } from './store';


class Cart extends Component {
  constructor(props) {
    super(props);
  };


  componentDidMount() {
    this.props.fetchCart
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.fetchCart();
    } 
 
  };
  

  render() {
  const { cart, deleteLineItem } = this.props;
  const lineItemsArr = cart.lineItems
  
    return (
      <section id='lineItems'>
        <h1>My Cart</h1>
          <ul>
            {
           lineItemsArr.map( lineItem => {
                return (
                  <li key={ lineItem.id }>
                    { lineItem.product.name } { lineItem.quantity } 
                      <button onClick={() => deleteLineItem(lineItem.product)}>X</button>
                  </li>
                )
              })
            }
          </ul>
        <button><Link className="links" to='/checkout'>Checkout</Link></button> 
    </section>
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
    exchangeToken: () => {
      dispatch(exchangeToken())
    },
    fetchCart: () => {
      dispatch(fetchCart())
    },
    deleteLineItem: (product) => {
      dispatch(deleteLineItem(product))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

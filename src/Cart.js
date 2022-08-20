import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem, updateLineItemQuantity} from './store';
import { exchangeToken, fetchCart } from './store';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  };


  componentDidMount() {
    this.props.fetchCart();
  };
  
  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.fetchCart();
    };
  };
  

  onChange(ev) {
    const change = { [ev.target.name]: ev.target.value };
    this.setState(change);
    this.props.updateLineItemQuantity(change);
  };

  render() {
    const { cart } = this.props;
    const { onChange } = this;
    // const lineItems = Array.from(cart.lineItem)

    return (
      <section id='lineItems'>
        <h1>My Cart</h1>
          <ul>
            {
             cart.lineItem.map( lineItem => {
                return (
                  <li key={ lineItem.id }>
                    { lineItem.product.name } { lineItem.quantity } 
                    <div>
                      <input type='number' 
                      name={lineItem.product.name} 
                      value={lineItem.quantity} 
                      onChange={onChange}/>
                    </div>
                        <p> Size:{lineItem.product.size}</p>
                          <p>Color:{lineItem.product.colorway}</p>
                          <p>Price:{lineItem.product.Price}</p>
                        <p>About:{lineItem.product.description}</p>
                      <button onClick={() => this.props.deleteLineItem(lineItem.product)}>X</button>
                  </li>
                )
              })
            }
          </ul>
          <section id="cost">
            <p>Shipping Cost</p>
            <p>Discount</p>
            <p></p>
          </section>
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
    updateLineItemQuantity: (obj) => {
     dispatch(updateLineItemQuantity(obj))
    },
    deleteLineItem: (product) => {
      dispatch(deleteLineItem(product))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

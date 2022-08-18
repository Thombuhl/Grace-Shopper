import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteLineItem, exchangeToken, fetchCart } from './store';
import { updateLineItemQuantity } from './store';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.auth.id && this.props.auth.id) {
      this.props.fetchCart();
    }
  }

  onChange(ev) {
    const change = { [ev.target.name]: ev.target.value };
    this.setState(change);
    this.props.updateLineItemQuantity(change);
  }

  render() {
    const { cart } = this.props;
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
                  name={lineItem.product.name}
                  value={lineItem.quantity}
                  onChange={onChange}
                />
                <p> Size:{lineItem.product.size}</p>
                <p>Color:{lineItem.product.colorway}</p>
                <p>Price:{lineItem.product.Price}</p>
                <p>About:{lineItem.product.description}</p>
                <button onClick={() => this.props.deleteLineItem()}>X</button>
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

const mapStateToProps = ({ cart, auth }) => {
  return {
    cart,
    auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    exchangeToken: () => dispatch(exchangeToken()),
    fetchCart: () => dispatch(fetchCart()),
    updateLineItemQuantity: (obj) => dispatch(updateLineItemQuantity(obj)),
    deleteLineItem: (item) => dispatch(deleteLineItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

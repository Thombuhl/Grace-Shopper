/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem, fetchCart, addToCart} from './store';

import {Icon, IconDiv, LineItem} from './styledComponents/CartStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  const { cart, deleteLineItem, addToCart} = this.props;

    return (
        <IconDiv>
            {
              cart.lineItems.map(lineItem => {
                return ( 
                  <LineItem key={ lineItem.id } >
                   <p>{lineItem.product.name} {lineItem.quantity}</p>
                      <Icon>
                        <AddIcon onClick={() => addToCart(lineItem, 1)}/>
                      </Icon>
                      <Icon>
                        <RemoveIcon onClick={() => addToCart(lineItem, -1)}/>
                      </Icon>
                      <Icon>
                        <DeleteIcon onClick={() => deleteLineItem(lineItem)}/>
                      </Icon>
                  
                  </LineItem>
                )
               
              }) 
          
            }
       
        <button><Link className="links" to='/checkout'>Checkout</Link></button> 
        </IconDiv>

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
    },
    addToCart: (product, diff = 1) => {
      dispatch(addToCart(product, diff))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

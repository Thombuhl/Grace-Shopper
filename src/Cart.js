/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteLineItem, fetchCart, updateCart} from './store';
import {
  Icon, 
  IconDiv,
  Image,
  ImageDiv, 
  Container,
  MainContainer,
  Title,
  Detail, 
  DetailDiv
} from './styledComponents/CartStyles'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

class Cart extends Component {
  constructor() {
    super();
  };

  componentDidMount() {
    this.props.fetchCart()
  };
  

  render() {
    const { cart, updateCart, } = this.props;
    return (
      <MainContainer>
          {cart.lineItems.map((lineItem) => {
            return (
              <Container>
                <Title>{lineItem.product.name.toUpperCase()} </Title>
                <DetailDiv>
                  <Detail>Quantity {lineItem.quantity}</Detail> 
                  <Detail>${lineItem.product.price}</Detail>  
                </DetailDiv>
                  <ImageDiv>
                    <Image src={lineItem.product.imageLocation} />
                  </ImageDiv>
                  <IconDiv>
                    <Icon onClick={() => updateCart(lineItem.product, 1)}><AddIcon/></Icon>
                    <Icon onClick={() => updateCart(lineItem.product, -1)}><RemoveIcon/></Icon>
                    <Icon onClick={() => this.props.deleteLineItem(lineItem)}><DeleteOutlineIcon/></Icon>
                  </IconDiv>
              </Container>
            );
          })}
        <button>
          <Link className="links" to="/checkout">
            Checkout
          </Link>
        </button>
      </MainContainer>

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

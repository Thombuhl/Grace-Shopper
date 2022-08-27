import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLineItem, fetchCart, updateCart } from './store';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Footer from './Footer';
import Heading from './Heading';
import StripeContainer from './stripe/StripeContainer';
import {
  Container,
  Wrapper,
  Title,
  OrderShipping,
  OrderSubtotal,
  OrderSummary,
  OrderTax,
  OrderTotal,
  PriceDiv,
  ProductDiv,
  ProductColor,
  ProductDetail,
  Product,
  ProductPrice,
  ProductImage,
  ProductName,
  ProductSize,
  Summary,
  SummaryItem,
  ShopDiv,
  ShopButton,
  Info,
  HR,
  Details,
  Quantity,
  Icon,
} from './styledComponents/CartStyles';

const Cart = ({ cart, updateCart, deleteLineItem }) => {
  let totalAmountOfCart = 0;
  const token = window.localStorage.getItem('token');
  let browserCart = [];

  if (token === 'guest') {
    browserCart = JSON.parse(window.localStorage.getItem('cart'));
  } else browserCart = cart;
  browserCart.lineItems.map((item) => console.log(item));

  cart.lineItems.forEach((lineItem) => {
    let quantity = lineItem.quantity;
    let price = lineItem.product.price;
    if (quantity && price) {
      let lineItemCost = price * quantity;
      totalAmountOfCart = lineItemCost + totalAmountOfCart;
    }
  });

  return (
    <div>
      <Heading />
      <Container>
        <Wrapper>
          <Title>Your Cart</Title>
          {browserCart.lineItems.map((lineItem) => {
            return (
              <ProductDiv key={lineItem.id}>
                <Info>
                  <HR />
                  <Product>
                    <ProductDetail>
                      <ProductImage
                        src={lineItem.product.imageLocation}
                      ></ProductImage>
                      <Details>
                        <ProductName>
                          <strong>Product Name:</strong>
                          {lineItem.product.name.toUpperCase()}
                        </ProductName>
                        <ProductColor>
                          <strong>Colorway:</strong>
                          {lineItem.product.colorway}
                        </ProductColor>
                        <ProductSize>
                          <strong>Size:</strong>
                          {lineItem.product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDiv>
                      <Quantity>
                        <Icon onClick={() => updateCart(lineItem.product, -1)}>
                          <RemoveIcon />
                        </Icon>
                        <Icon
                          style={{
                            backgroundColor: '#53bf9d',
                            width: '20px',
                            height: '20px',
                            cursor: 'wait',
                            color: '#f6e3c5',
                          }}
                        >
                          {lineItem.quantity}
                        </Icon>
                        <Icon onClick={() => updateCart(lineItem.product, 1)}>
                          <AddIcon />
                        </Icon>
                        <Icon onClick={() => deleteLineItem(lineItem)}>
                          <DeleteOutlineIcon />
                        </Icon>
                      </Quantity>
                      <ProductPrice>${lineItem.product.price}</ProductPrice>
                    </PriceDiv>
                  </Product>
                </Info>
              </ProductDiv>
            );
          })}
          <OrderSummary>
            <Summary>Order Summary</Summary>
            <SummaryItem>
              <OrderTotal>
                Total Amount: ${totalAmountOfCart.toFixed(2)}
              </OrderTotal>
            </SummaryItem>
            <SummaryItem>
              <OrderShipping>
                Shipping: {totalAmountOfCart > 150 ? 'Free Shipping' : `$${25}`}
              </OrderShipping>
            </SummaryItem>
            <SummaryItem>
              <OrderTax>Tax: ${(totalAmountOfCart * 0.04).toFixed(2)}</OrderTax>
            </SummaryItem>
            <SummaryItem>
              <OrderSubtotal>
                Subtotal: $
                {(totalAmountOfCart + 25 + totalAmountOfCart * 0.04).toFixed(2)}
              </OrderSubtotal>
            </SummaryItem>
          </OrderSummary>
          <ShopDiv>
            <ShopButton>
              <Link
                className="links"
                style={{ textDecoration: 'none', color: 'black' }}
                to="/products"
              >
                Continue Shopping
              </Link>
            </ShopButton>
            <ShopButton>
              <Link
                className="links"
                style={{ textDecoration: 'none', color: 'black' }}
                to="/checkout"
              >
                Checkout
              </Link>
            </ShopButton>
          </ShopDiv>
        </Wrapper>
        <StripeContainer />
      </Container>
      <Footer />
    </div>
  );
};

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
      dispatch(fetchCart());
    },
    deleteLineItem: (product) => {
      dispatch(deleteLineItem(product));
    },
    updateCart: (product, diff = 1) => {
      dispatch(updateCart(product, diff));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

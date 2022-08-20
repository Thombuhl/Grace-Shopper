import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './styledComponents/ProductsStyles';
import ProductCards from './ProductCards';
import Heading from './Heading';
import Footer from './Footer';
import axios from 'axios';

const Product = ({ products }) => {
  const productsArr = Array.from(products);
  return (
    <div>
      <Heading />
      <Container>
        {productsArr.map((product) => {
          return <ProductCards key={product.id} product={product} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

const mapState = ({ products, cart, auth }) => {
  //   console.log('productsPageProducts', products);
  console.log('productsPageCart', cart);
  console.log('productsPageAuth', auth);
  return {
    products,
    cart,
    auth,
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(Product);

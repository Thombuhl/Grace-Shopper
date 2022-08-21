import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  FilterDiv,
  FilterItem,
  Select,
  Option,
} from './styledComponents/ProductsStyles';
import ProductCards from './ProductCards';
import Heading from './Heading';
import Footer from './Footer';

const Product = ({ products }) => {
  const productsArr = Array.from(products);
  const filteredBrandsArr = [];
  const getBrands = productsArr.filter((product) => {
    const brandExists = filteredBrandsArr.includes(product.brand);
    if (!brandExists) {
      filteredBrandsArr.push(product.brand);
    }
    console.log('filteredBrand', filteredBrandsArr);
  });

  return (
    <div>
      <Heading />
      <FilterDiv>
        <FilterItem style={{ fontSize: '1rem' }}>
          Filter Products:
          <Select>
            {filteredBrandsArr.map((brand) => {
              return <Option>{brand}</Option>;
            })}
          </Select>
          <Select>
            <Option>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Silver</Option>
            <Option>Brown</Option>
            <Option>Taupe</Option>
            <Option>Grey</Option>
          </Select>
        </FilterItem>
        <FilterItem>
          Sort by:
          <Select>
            <Option>Price:(High to Low)</Option>
            <Option>Price:(Low to High)</Option>
          </Select>
        </FilterItem>
      </FilterDiv>
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

export default connect(mapState)(Product);

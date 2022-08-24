import React, { Component, useState, useEffect } from 'react';
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

const Product = ({ products, colorNames, brandNames }) => {
  const productsArr = Array.from(products);
  const [filter, setFilter] = useState({});
  const url = `/products/${JSON.stringify(filter)}`;
  const handleFilters = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFilter({
      ...filter,
      [name]: value,
    });
  };
  console.log('url', url);
  console.log('filter', filter);
  return (
    <div>
      <Heading />
      <FilterDiv>
        <FilterItem style={{ fontSize: '1rem' }}>
          Filter Products:
          <Select name="brand" onChange={handleFilters}>
            <Option>--Brand--</Option>
            {brandNames.map((item) => {
              return <Option key={item.id}>{item.brand}</Option>;
            })}
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option>--Color--</Option>
            {colorNames.map((item) => {
              return <Option key={item.id}>{item.color}</Option>;
            })}
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

const mapState = ({ products, cart, auth }, { match }) => {
  console.log('match', match);
  const productsArr = Array.from(products);
  const filter = match.params.filter ? JSON.parse(match.params.filter) : {};
  const colorsArr = productsArr.reduce((acc, product) => {
    const color = product.colorway.split('/')[0];
    acc[color] = acc[color] || {
      id: product.id,
      color,
      count: 0,
    };
    acc[color].count++;
    return acc;
  }, {});
  const colorNames = Object.values(colorsArr);
  const brandsArr = productsArr.reduce((acc, product) => {
    const brand = product.brand.toUpperCase();
    acc[brand] = acc[brand] || {
      id: product.id,
      brand,
      count: 0,
    };
    acc[brand].count++;
    return acc;
  }, {});
  const brandNames = Object.values(brandsArr);
  const priceArr = productsArr.reduce((acc, product) => {
    const price = product.price;
    acc[price] = acc[price] || {
      id: product.id,
      price,
      count: 0,
    };
    acc[price].count++;
    return acc;
  }, {});
  const prices = Object.values(priceArr);
  const lowPrices = prices.sort((a, b) => {
    return a.price - b.price;
  });
  const highPrices = prices.sort((a, b) => {
    return b.price - a.price;
  });
  return {
    products,
    cart,
    auth,
    colorNames,
    brandNames,
    highPrices,
    lowPrices,
  };
};

export default connect(mapState)(Product);

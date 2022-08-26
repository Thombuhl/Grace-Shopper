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
import { Link } from 'react-router-dom';

const Product = ({ products, colorNames, brandNames }) => {
  const productsArr = Array.from(products);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const url = `/products/${JSON.stringify(filter)}`;
  const handleFilters = (event) => {
    const value = event.target.value;
    setFilter({
      ...filter,
      [event.target.name]: value,
    });
  };
  console.log('filter', filter);
  useEffect(() => {
    if (filter) {
      setFilteredProducts(
        productsArr.filter((product) =>
          Object.entries(filter).every(([key, value]) => {
            console.log('key:', product[key], 'value:', value);
            return product[key].includes(value);
          })
        )
      );
    } else if (filter === 'Brands')
      productsArr.map((product) => {
        return <ProductCards key={product.id} product={product} />;
      });
  }, [filter, products]);
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.id - b.id));
    } else if (sort === 'low') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div>
      <Heading />
      <FilterDiv>
        <FilterItem style={{ fontSize: '1rem' }}>
          <Select name="brand" onChange={handleFilters}>
            <Option>Brands</Option>
            {brandNames.map((item) => {
              return <Option key={item.id}>{item.brand}</Option>;
            })}
          </Select>
          <Select name="colorway" onChange={handleFilters}>
            <Option>Colors</Option>
            {colorNames.map((item) => {
              return <Option key={item.id}>{item.color}</Option>;
            })}
          </Select>
        </FilterItem>
        <FilterItem>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="high">Price:(Descending)</Option>
            <Option value="low">Price:(Ascending)</Option>
          </Select>
        </FilterItem>
      </FilterDiv>
      <Container>
        {filteredProducts.map((product) => {
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
    const brand = product.brand;
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

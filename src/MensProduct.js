import React from 'react';
import { connect } from 'react-redux';
import ProductCards from './ProductCards';
import {
  Container,
  FilterDiv,
  FilterItem,
  Select,
  Option,
} from './styledComponents/ProductsStyles';
import Heading from './Heading';
import Footer from './Footer';

const MenProducts = ({ products, colorNames, brandNames }) => {
  const productsArr = Array.from(products);
  const filteredProd = productsArr.filter(
    (product) => product.gender === 'MENS'
  );
  return (
    <div>
      <Heading />
      <FilterDiv>
        <FilterItem style={{ fontSize: '1rem' }}>
          Filter Products:
          <Select>
            <Option>--Brand--</Option>
            {brandNames.map((item) => {
              return (
                <Option key={item.id}>
                  {item.brand} ({item.count})
                </Option>
              );
            })}
          </Select>
          <Select>
            <Option>--Color--</Option>
            {colorNames.map((item) => {
              return (
                <Option key={item.id}>
                  {item.color} ({item.count})
                </Option>
              );
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
        {filteredProd.map((product) => {
          return <ProductCards key={product.id} product={product} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

const mapState = ({ products, cart, auth }, { match }) => {
  const productsArr = Array.from(products);
  const filteredProductsArr = productsArr.filter(
    (product) => product.gender === 'MENS'
  );
  const filter = match.params.filter ? JSON.parse(match.params.filter) : {};
  const colorsArr = filteredProductsArr.reduce((acc, product) => {
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
  const brandsArr = filteredProductsArr.reduce((acc, product) => {
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
  const priceArr = filteredProductsArr.reduce((acc, product) => {
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
  };
};

export default connect(mapState)(MenProducts);

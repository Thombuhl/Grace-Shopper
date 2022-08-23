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

const MenProducts = ({ products }) => {
  const productsArr = Array.from(products);
  const filteredProd = productsArr.filter(
    (product) => product.gender === 'MENS'
  );
  const filteredBrandsArr = [];
  const filteredColorsArr = [];
  const getBrands = productsArr.filter((product) => {
    const brandExists = filteredBrandsArr.includes(product.brand);
    if (!brandExists) {
      filteredBrandsArr.push(product.brand);
    }
    return filteredBrandsArr;
  });
  const getColors = productsArr.filter((product) => {
    const colorExists = filteredColorsArr.includes(product.colorway);
    if (!colorExists) {
      filteredColorsArr.push(product.colorway);
    }
    return filteredBrandsArr;
  });
  return (
    <div>
      <Heading />
      <FilterDiv>
        <FilterItem style={{ fontSize: '1rem' }}>
          Filter Products:
          <Select>
            <Option>Brand</Option>
            {filteredBrandsArr.map((brand) => {
              return <Option key={brand}>{brand}</Option>;
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
        {filteredProd.map((product) => {
          return <ProductCards key={product.id} product={product} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

const mapState = ({ products, cart, auth }) => {
  return {
    products,
    cart,
    auth,
  };
};

export default connect(mapState)(MenProducts);

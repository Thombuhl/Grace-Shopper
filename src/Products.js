import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styledComponents/ProductsStyles';
import ProductCards from './ProductCards';
import Heading from './Heading';
import Footer from './Footer';

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

const mapState = ({ products }) => {
  console.log('productsPage', products);
  return {
    products,
  };
};

export default connect(mapState)(Product);

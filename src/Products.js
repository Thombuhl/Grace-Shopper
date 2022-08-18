import { DeviceUnknownSharp, NineK } from '@mui/icons-material';
import React from 'react';
import { connect } from 'react-redux';

const Product = ({ products }) => {
  const productsArr = Array.from(products);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productsArr.map((product) => {
          return (
            <div key={product.id}>
              <img
                style={{ width: '200px', height: '300px' }}
                src={product.imageLocation}
              ></img>
              <li>{product.name}</li>
            </div>
          );
        })}
      </ul>
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

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = ({ products }) => {
  const [filteredData, setFilteredData] = useState('');
  return (
    <div className="search">
      <div className="searchInput">
        <input
          className="text-warning"
          type="text"
          placeholder="Search ..."
          onChange={(event) => setFilteredData(event.target.value)}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="searchResult">
          {products
            .filter(
              (product) =>
                product.brand.toLowerCase().includes(filteredData) ||
                product.colorway.toLowerCase().includes(filteredData)
            )
            .map((product) => {
              return (
                <Link
                  className="links resultItem"
                  key={product.id}
                  to={`/products/${product.id}`}
                >
                  <p>{product.name}</p>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

const mapState = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapState)(Search);

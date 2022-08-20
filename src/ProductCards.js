import React from 'react';
import { Link } from 'react-router-dom';
import {
  ImageBackground,
  Container,
  Icon,
  IconDiv,
  Image,
} from './styledComponents/ProductCardStyles';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { addToCart } from './store';
import { connect } from 'react-redux';

const ProductCards = ({ product, addToCart }) => {
  return (
    <Container>
      <ImageBackground />
      <Image src={product.imageLocation} />
      <IconDiv>
        <Icon>
          <ShoppingBasketIcon
            onClick={() => addToCart(product)}
            style={{ color: 'black' }}
          />
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
      </IconDiv>
    </Container>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(null, mapDispatch)(ProductCards);

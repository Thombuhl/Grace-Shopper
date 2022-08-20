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

const ProductCards = ({ product }) => {
  return (
    <Container>
      <ImageBackground />
      <Image src={product.imageLocation} />
      <IconDiv>
        <Icon>
          <Link to="/cart">
            <ShoppingBasketIcon style={{ color: 'black' }} />
          </Link>
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
      </IconDiv>
    </Container>
  );
};

export default ProductCards;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ImageBackground,
  Container,
  Icon,
  IconDiv,
  Image,
} from './styledComponents/ProductCardStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { addToCart } from './store';
import { connect } from 'react-redux';
import ModalBox from './Modal';

const ProductCards = ({ product, addToCart }) => {
  return (
    <Container>
      <ImageBackground />
      <Image src={product.imageLocation} />
      <IconDiv>
        <Icon>
          <ModalBox product={product} />
        </Icon>
        <Icon>
          <Link to={`/products/${product.id}`}>
            <InfoIcon style={{ color: '#f6e3c5' }} />
          </Link>
        </Icon>
        <Icon>
          <Link to="/favorites">
            <FavoriteIcon style={{ color: 'hotpink' }} />
          </Link>
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

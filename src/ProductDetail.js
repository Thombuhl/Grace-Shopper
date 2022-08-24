import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalBox from './Modal';
import {
  Container,
  Wrapper,
  ImageDiv,
  Image,
  InfoDiv,
  Info,
  Price,
  SizeDiv,
  Size,
  ColorWay,
  SizeSelect,
  ChooseSize,
  AddDiv,
  Title,
  Icon,
  Button,
} from './styledComponents/ProductDetailStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Heading />
      <Container>
        <Wrapper>
          <ImageDiv>
            <Image src={product.imageLocation} />
          </ImageDiv>
          <InfoDiv>
            <Title>{product.name ? product.name.toUpperCase() : ''}</Title>
            <Info>{product.description}</Info>
            <Price>${product.price}</Price>
            <SizeDiv>
              <ColorWay>Color: {product.colorway}</ColorWay>
              <Size>
                Size:
                <SizeSelect>
                  <ChooseSize>--Select a size--</ChooseSize>
                  <ChooseSize>{product.size}</ChooseSize>
                </SizeSelect>
              </Size>
            </SizeDiv>
            <AddDiv>
              <ModalBox product={product} />
              <Icon>
                <Link style={{ color: 'hotpink' }} to={'/favorites'}>
                  <FavoriteIcon />
                </Link>
              </Icon>
            </AddDiv>
          </InfoDiv>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

const mapState = ({ products }, { match }) => {
  const productId = match.params.id * 1;
  const productsArr = Array.from(products);
  const product = productsArr.find((product) => product.id === productId) || {};
  return {
    products,
    product,
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(ProductDetail);

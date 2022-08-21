import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
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
  AddAmt,
  Amount,
  Title,
  Button,
} from './styledComponents/ProductDetailStyles';
import { addToCart } from './store';

const ProductDetail = ({ product, addToCart }) => {
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
              <AddAmt>
                <RemoveIcon />
                <Amount>1</Amount>
                <AddIcon />
              </AddAmt>
              <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
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
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapState, mapDispatch)(ProductDetail);

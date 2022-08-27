import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import { connect, useSelector } from 'react-redux';
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


const ProductDetail = ({ product, addToCart, history, match }) => {
  const shoes = useSelector(state => state.products)
  let sizes = Array.from(shoes).filter(shoe => shoe.silhoutte === product.silhoutte)
  return (
    <div>
      <Heading />
      <Container>
      <button onClick={()=> history.push('/products')}>BACK</button>
        <Wrapper>
          <ImageDiv>
            <Image src={product.imageLocation} />
          </ImageDiv>
          <InfoDiv>
            <Title>{product.name ? product.name.toUpperCase() : ''}</Title>
            <Info>{product.description}</Info>
            <Price>${product.price}</Price>
            <SizeDiv>
              {
                sizes.map( shoe => {
                  const nonExistentColors = ['Muslin', 'Cardinal', 'Rope', 'Magnet']
                  const colorways = shoe.colorway.split('/').sort((a,b)=> a.length - b.length)
                  let colors = colorways.map(color => color.split(' ').length > 1 ? color.split(' ')[1] : color.split(' ')[0]).filter( color => !nonExistentColors.includes(color))
                  colors.length <1 ? colors.push('black') : colors
                  return (
                    <div style={{ background: "white"}}>
                      <button
                        onClick={()=> history.push(`/products/${shoe.id}`)}
                        style={{ width:"30px", height: "30px", background:`linear-gradient(${colors.join(', ')}, white)` , margin:"1rem" }}>
                      </button>
                    </div>
                  )
                })
              }
              <Size>
                Size:
                <SizeSelect>
                  <ChooseSize>--Select a size--</ChooseSize>
                  {
                    sizes.map( shoe => (
                      <ChooseSize>{shoe.size} {shoe.colorway}</ChooseSize>
                    ))
                  }
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

const mapState = ({ products }, { match, history }) => {
  console.log(history)
  const productId = match.params.id * 1;
  const productsArr = Array.from(products);
  const product = productsArr.find((product) => product.id === productId) || {};
  return {
    products,
    product,
    history
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(ProductDetail);

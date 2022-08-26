import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { carouselData } from './carouselData';
import {
  Container,
  ArrowDirection,
  Wrapper,
  Slide,
  Info,
  Image,
  ImageDiv,
  InfoDiv,
  Title,
  Button,
} from './styledComponents/CarouselStyles';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [slideItem, setSlideItem] = useState(0);
  const arrowClick = (direction) => {
    if (direction === 'back') {
      setSlideItem(slideItem > 0 ? slideItem - 1 : 3);
    } else {
      setSlideItem(slideItem < 3 ? slideItem + 1 : 0);
    }
  };
  return (
    <Container>
      <ArrowDirection direction="back" onClick={() => arrowClick('back')}>
        <ArrowBackIosNewIcon />
      </ArrowDirection>
      <Wrapper slideItem={slideItem}>
        {carouselData.map((slideItem) => {
          return (
            <Slide key={slideItem.id}>
              <ImageDiv>
                <Image src={slideItem.img}></Image>
              </ImageDiv>
              <InfoDiv>
                <Title>{slideItem.title}</Title>
                <Info>{slideItem.info}</Info>
                <Button
                  style={{
                    backgroundColor: '#53bf9d',
                  }}
                >
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: '#f6e3c5',
                    }}
                    to="/products"
                  >
                    Shop Now
                  </Link>
                </Button>
              </InfoDiv>
            </Slide>
          );
        })}
      </Wrapper>
      <ArrowDirection direction="forward" onClick={() => arrowClick('forward')}>
        <ArrowForwardIosIcon />
      </ArrowDirection>
    </Container>
  );
};

export default Carousel;

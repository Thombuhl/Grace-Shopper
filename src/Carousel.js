import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { carouselData } from "./carouselData";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const ArrowDirection = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "back" && "10px"};
  right: ${(props) => props.direction === "forward" && "10px"};
  cursor: pointer;
  opacity: 0.35;
  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translatex(${(props) => props.slideItem * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageDiv = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 60vw;
`;

const InfoDiv = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Info = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Carousel = () => {
  const [slideItem, setSlideItem] = useState(0);
  const arrowClick = (direction) => {
    if (direction === "back") {
      setSlideItem(slideItem > 0 ? slideItem - 1 : 3);
    } else {
      setSlideItem(slideItem < 3 ? slideItem + 1 : 0);
    }
  };
  return (
    <Container>
      <ArrowDirection direction="back" onClick={() => arrowClick("back")}>
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
                <Button onClick={() => console.log("Shop now!")}>
                  Shop Now
                </Button>
              </InfoDiv>
            </Slide>
          );
        })}
      </Wrapper>
      <ArrowDirection direction="forward" onClick={() => arrowClick("forward")}>
        <ArrowForwardIosIcon />
      </ArrowDirection>
    </Container>
  );
};

export default Carousel;

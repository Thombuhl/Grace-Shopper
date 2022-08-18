import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const ArrowDirection = styled.div`
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
  left: ${(props) => props.direction === 'back' && '10px'};
  right: ${(props) => props.direction === 'forward' && '10px'};
  cursor: pointer;
  opacity: 0.35;
  z-index: 3;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translatex(${(props) => props.slideItem * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const ImageDiv = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
  width: 60vw;
`;

export const InfoDiv = styled.div`
  flex: 1;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Info = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

import styled from 'styled-components';

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 3px;
  min-width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  position: relative;
  &: hover ${IconDiv} {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 3px;
  border-radius: 50%;
  background-color: gray;
  transition: all 0.7s ease;
  &:hover {
    background-color: teal;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  height: 40%;
  z-index: 2;
`;

export const ImageBackground = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

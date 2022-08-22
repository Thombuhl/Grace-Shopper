import styled from "styled-components";


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
    background-color: salmon;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
`;


export const DetailDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.h3`
  font-size: 1rem;
  font-family: sans-serif;
  color: black;
  margin: .5rem;
`;

export const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column
`;


export const ImageDiv = styled.div`
  flex: 1;
  height 150px;
`;

export const Image = styled.img`
  width: 75%;
  height: 75%;
`;


export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  background: linear-gradient(to left top,
  rgb(255, 255, 255, 1), 
  rgba(255,255,255,1));
  margin: 1rem;
  width: 400px;
`;


export const MainContainer = styled.div`
  background-color: grey;
  display: flex;
  width: 875px;
  flex-wrap: wrap;
`;
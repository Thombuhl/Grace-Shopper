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
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black
  opacity: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
`;

export const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column
`;
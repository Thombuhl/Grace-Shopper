import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 50vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #2bbbad;
  border-radius: 12px;
`;
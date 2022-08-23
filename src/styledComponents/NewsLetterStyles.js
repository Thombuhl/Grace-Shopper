import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 30px;
`;

export const Info = styled.div`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 80px;
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const InputEmail = styled.input`
  border: none;
  flex: 10;
  width: 100%;
  height: 65%;
  padding-left: 30px;
`;

export const Button = styled.button`
  flex: 1;
  width: 100%;
  height: 65%;
  background-color: #53bf9d;
  color: #f6e3c5;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://blog.klekt.com/wp-content/uploads/2021/01/Sneaker-Pile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: 40%;
  background-color: #343a40;
  border-radius: 12px;
`;

export const Title = styled.h3`
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  margin: 20px 20px;
  padding: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  padding: 5px;
  background-color: #53bf9d;
  color: #f6e3c5;
  cursor: pointer;
  font-weight: 900;
`;

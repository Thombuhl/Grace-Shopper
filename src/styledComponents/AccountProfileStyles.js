import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #53bf9d;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

export const Title = styled.h1`
  text-decoration: underline;
  font-weight: 500;
  text-shadow: 2px 2px 5px #f6e3c5;
`;

export const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  line-height: 3;
  background-color: #53bf9d;
  border-radius: 12px;
  transition: all 1s ease;
  border: 1px solid black;
  width: 40vw;
  height: 70vh;

  &:hover {
    background-color: #f6e3c5;
    color: #53bf9d;
    cursor: pointer;
  }
`;

export const UserInfo = styled.span`
  font-weight: 900;
  text-shadow: 2px 2px 5px #f6e3c5;
`;

export const UserAccount = styled.span`
  font-weight: 500;
  text-transform: capitalize;
`;

export const UserName = styled.span`
  font-weight: 500;
  text-transform: capitalize;
`;

export const UserEmail = styled.span`
  font-weight: 500;
  text-transform: capitalize;
`;

export const Image = styled.img`
  width: 20%;
  border: 1px dotted black;
  border-radius: 50%;
  margin: 20px 0px;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 10vh;
  padding: 20px;
  background-color: #53bf9d;
  color: #f6e3c5;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 1s ease;
  text-shadow: 2px 2px black;
  border: 1px solid black;
  &:hover {
    background-color: #f6e3c5;
    color: #53bf9d;
    cursor: pointer;
  }
`;

export const InputDiv = styled.div`
  margin-bottom: 30px;
  width: 30vw;
`;

export const UploadImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  background-color: #53bf9d;
`;

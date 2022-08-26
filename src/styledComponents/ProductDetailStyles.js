import styled from 'styled-components';

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
export const ImageDiv = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoDiv = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

export const Title = styled.h1`
  font-weight: 100;
`;

export const Info = styled.h6`
  margin: 30px 0px;
`;

export const ColorWay = styled.div``;

export const Price = styled.span`
  font-weight: 100;
  font-size: 2.5rem;
`;

export const SizeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 30px 0px;
`;

export const Size = styled.div``;

export const SizeSelect = styled.select`
  margin-left: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const ChooseSize = styled.option``;

export const AddDiv = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin-top: 75px;
`;

export const AddAmt = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
`;

export const Amount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #53bf9d;
  margin: 0px 5px;
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid #53bf9d;
  background-color: #53bf9d;
  color: #f6e3c5;
  cursor: pointer;
  font-weight: 900;

  &:hover {
    background-color: #f6e3c5;
    color: #53bf9d;
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

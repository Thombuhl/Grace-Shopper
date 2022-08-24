import styled from 'styled-components';
import { TaxiAlertOutlined } from '@mui/icons-material';
export const Container = styled.div`
  background-color: #f8f8f8;
`;
export const Wrapper = styled.div`
  padding: 30px;
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
`;
export const ShopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;
export const ShopButton = styled.button`
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  background-color: #53bf9d;
  color: #f6e3c5;
  &:hover {
    background-color: #f6e3c5;
    color: #53bf9d;
  }
`;

export const ShopInfo = styled.div``;

export const CartInfo = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 20px;
`;

export const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: 150px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  line-height: 2;
`;

export const ProductName = styled.span``;

export const ProductColor = styled.span``;

export const ProductSize = styled.span``;

export const OrderSummary = styled.div`
  width: 30vw;
  height: 25vh;
  margin: 50px 0;
  border: 1px solid black;
  border-radius: 12px;
`;
export const Summary = styled.h1`
  text-align: center;
  text-decoration: underline;
  font-size: 2rem;
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 10px 0;
  font-size: 0.8rem;
  font-family: sans-serif;
`;

export const OrderTotal = styled.span``;

export const OrderShipping = styled.span``;

export const OrderTax = styled.span``;

export const OrderSubtotal = styled.span``;

export const PriceDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
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

export const HR = styled.hr`
  background-color: #343a40;
  opacity: 0.25;
`;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Image,
  Title,
  Info,
} from './styledComponents/CategoryStyles';
const CategoryName = ({ category }) => {
  return (
    <Container>
      <Link to={`/${category.title}`.toLowerCase()}>
        <Image src={category.img} />
        <Info>
          <Title>{category.gender}</Title>
          <Button>SHOP {category.title.toUpperCase()}</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryName;

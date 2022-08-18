import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
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
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #2bbbad;
  border-radius: 12px;
`;

const CategoryName = ({ category }) => {
  return (
    <Container>
      <Link to={`/${category.title}`}>
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button onClick={(event) => console.log(event)}>
            SHOP {category.title.toUpperCase()}
          </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryName;

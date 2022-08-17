import React from "react";
import styled from "styled-components";
import { categoriesData } from "./CategoriesData";
import CategoryName from "./CategoryName";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;
const Categories = () => {
  return (
    <Container>
      {categoriesData.map((category) => {
        return <CategoryName key={category.id} category={category} />;
      })}
    </Container>
  );
};

export default Categories;

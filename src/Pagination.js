import React from 'react';
import styled from 'styled-components';

export const Container = styled.div``;
export const List = styled.ul``;
export const ListItem = styled.li``;

const Pagination = ({ productsPerPage, totalProducts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      Pagination
      <List>
        {pageNumbers.map((num) => {
          return (
            <ListItem key={num}>
              <a href="!#">{num}</a>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Pagination;

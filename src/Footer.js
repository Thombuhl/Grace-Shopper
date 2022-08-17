import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  height: 30px;
  background-color: #343a40;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  font-size: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Info>© FSA GST7 2022</Info>
    </Container>
  );
};

export default Footer;

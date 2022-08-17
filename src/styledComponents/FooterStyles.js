import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
`;

// LEFT FOOTER
export const LeftFooter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;
export const Info = styled.p`
  margin: 20px 0px;
`;
export const SocialMedia = styled.div`
  display: flex;
`;
export const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// CENTER FOOTER

export const CenterFooter = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h4`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const CenterItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

// RIGHT FOOTER

export const RightFooter = styled.div`
  flex: 1;
  padding: 10px;
`;

export const RightItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Image = styled.img`
  width: 30%;
`;

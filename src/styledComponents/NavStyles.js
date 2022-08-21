import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background-color: #343a40;
  color: white;
  border-radius: 2px;
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftNav = styled.div`
  flex: 1;
  display: flex;
`;
export const LeftNavItem = styled.div`
  font-size: 1rem;
  margin-right: 10px;
`;
export const CenterNav = styled.div`
  flex: 1;
`;
export const RightNav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
export const RightNavItem = styled.div`
  font-size: 1rem;
  margin-left: 10px;
`;
export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  color: white;
`;

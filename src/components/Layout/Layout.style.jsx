import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #666;
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    margin-right: 20px;
  }
`;

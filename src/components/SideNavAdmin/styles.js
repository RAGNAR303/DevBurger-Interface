import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.blacklinear};

  img {
    height: 30%;
    margin: 20px 0;
  }
`;
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.purple};
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.green};
  }
`;
export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
`;

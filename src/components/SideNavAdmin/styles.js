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
  span {
    font-size: 18px;
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
  text-shadow: ${(props) =>
    props.$isActive ? '0px 0px 5px rgba(42, 251, 0, 0.69)' : 'none'};
  color: ${(props) =>
    props.$isActive ? props.theme.green : props.theme.purple};
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.green};
  }
  .icon {
    text-shadow: ${(props) =>
      props.$isActive ? '0px 0px 5px rgba(42, 251, 0, 0.69)' : 'none'};
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

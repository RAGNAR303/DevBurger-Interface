import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
  background: linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12));
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  h3 {
    color: ${(props) => props.theme.purple};
    font-size: 25px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
export const Navigation = styled.div`
  margin-left: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  gap: 15px;
  div {
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
export const HeaderLink = styled(Link)`
  font-size: 18px;
  color: ${(props) => (props.$isActive ? '  #61a120' : '  #9758a6 ')};
  text-decoration: none;
  font-weight: 800;
  transition: color 200ms;
  &:hover {
    color: ${(props) => props.theme.green};
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap: 5px;
  color: ${(props) => (props.$isActive ? '  #61a120' : '  #9758a6 ')};
  text-decoration: none;
  font-weight: 800;
  transition: color 200ms;
  &:hover {
    color: ${(props) => props.theme.green};
    text-shadow: 0px 0px 3px 'rgba(110, 216, 3, 0.69)';
  }
`;

export const Options = styled.div`
  margin-right: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-right: 10px;
  }
`;
export const Profile = styled.div`
  p {
    font-weight: 800;
    color: ${(props) => props.theme.purple};
  }
  span {
    color: ${(props) => props.theme.orange};
  }

  > svg {
    fill: ${(props) => props.theme.purple};
    cursor: pointer;
    font-size: 26px;
    &:hover {
      fill: ${(props) => props.theme.orange};
    }
  }
`;
export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(174, 1, 1);
  background: none;
  border: none;
  font-weight: 800;
  font-size: 13px;
  gap: 2px;

  &:hover {
    color: rgb(233, 10, 10);
    text-shadow: 0px 0px 3px rgba(251, 0, 0, 0.6);
  }
`;

export const SignOut = styled.h1`
  margin-left: 15px;
`;

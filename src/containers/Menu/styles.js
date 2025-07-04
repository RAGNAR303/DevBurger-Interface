import styled from 'styled-components';
import HamburguerMenu from '../../assets/Hamburguerhome.svg';
import BackgraoundSession from '../../assets/fundoB.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${BackgraoundSession}');
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
  gap: 20px;
`;
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 370px;
  background: url('${HamburguerMenu}') no-repeat;
  background-color: #1f1f1f;
  background-position: center;
  background-size: cover;
  position: relative;

  h1 {
    font-size: 80px;
    font-family: 'Flavors', cursive;
    color: ${(props) => props.theme.purple};
    line-height: 65px;
    position: absolute;
    right: 10%;
    top: 20%;
  }
  span {
    display: block;
    font-family: 'Flavors', cursive;
    color: ${(props) => props.theme.white};
    font-size: 30px;
    font-weight: 400;
  }
`;
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 50px 0;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.orange};
  font-size: 24px;
  height: 52px;
  font-weight: 900;
  border-radius: 20px;
  padding: 10px 20px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && `5px solid   #ff8c05`};
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  background: ${(props) =>
    props.$isActiveCategory
      ? 'linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88))'
      : `${(props) => props.theme.purpleBackgroundlinear}`};
  transition: 0.5s ease-in-out;

  &:hover {
    scale: calc(1.07);
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 60px;
  gap: 80px;
  justify-content: center;
  max-width: 1500px;
  margin: 50px auto 0px;
`;

export const ReturnButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.orange};
  font-size: 24px;
  height: 52px;
  font-weight: 900;
  border-radius: 20px;
  padding: 10px 20px;
  line-height: 20px;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  transition: 0.5s ease-in-out;
  &:hover {
    scale: calc(1.07);
    border-bottom: 5px solid ${(props) => props.theme.orange};
    background: linear-gradient(180deg, #61a120, rgb(71, 118, 24));
  }
`;

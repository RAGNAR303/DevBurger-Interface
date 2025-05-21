import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  .carousel-itens {
    padding-right: 40px;
    box-sizing: border-box;
  }
  

  .react-multiple-carousel__arrow {
    background: ${(props) => props.theme.purpleBackgroundlinear};
    border-radius: 50%;
    z-index: 1000;
  }
  .react-multiple-carousel__arrow:hover {
    scale: calc(1.07);
    background: linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88));
  }

  .react-multiple-carousel__arrow--left {
    left: calc(3% + 1px);
  }

  .react-multiple-carousel__arrow--right {
    right: calc(2% + 1px);
  }

  .react-multiple-carousel__arrow::before {
    color: ${(props) => props.theme.green};
    font-size: 30px;
    font-weight: 1000;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.purple};
  font-weight: 800;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-top: 50px;

  &::after {
    content: '';
    bottom: 0;
    position: absolute;
    width: 70px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 35px);
  }
`;

export const ContainerItems = styled.div`
  /* position: relative; */
  background: url('${(props) => props.$imageUrl}') no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  border: 2px solid ${(props) => props.theme.purple};
  border-radius: 20px;
  cursor: grab;
  margin: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  overflow: hidden;
  transition: all 0.7s;

  &:hover {
    scale: calc(1.03);
    font-size: 25px;
  }

  &:hover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* aqui define o overlay escuro */
    z-index: 1;
  }
`;
export const CategoryButton = styled(Link)`
  color:  ${(props) => props.theme.purple} ;
  text-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.72) ;
  padding: 5px 20px;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 800;
  margin-top: 150px;
  z-index: 2;
  text-decoration: none;
  transition: all 0.7s;

  &:hover {
    color: ${(props) => props.theme.orange};
  }
`;

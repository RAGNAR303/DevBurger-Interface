import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  padding-bottom: 40px;

  .carousel-Itens {
    padding-right: 40px;
  }

  .react-multiple-carousel__arrow {
    background: linear-gradient(180deg, #9758a6, #6f357c);
    border-radius: 50%;
    z-index: 1000;
  }
  .react-multiple-carousel__arrow:hover {
    scale: calc(1.07);
    background: linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88));
  }

  .react-multiple-carousel__arrow--left {
    left: 20px;
  }

  .react-multiple-carousel__arrow--right {
    right: 20px;
  }

  .react-multiple-carousel__arrow::before {
    color: #61a120;
    font-size: 30px;
    font-weight: 1000;
  }
`;
export const Title = styled.h2`
  font-size: 35px;
  color: #9758a6;
  font-weight: 800;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;

  &::after {
    content: '';
    bottom: 0;
    position: absolute;
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  position: relative;
  background: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 250px;
  border: 2px solid #9758a6;
  border-radius: 20px;
  cursor: grab;
  margin: 30px;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  overflow: hidden;
  transition: all 0.4s;
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

  p {
    color: #ff8c05;
    padding: 5px 20px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 800;
    margin-top: 150px;
    z-index: 2;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
  .carousel-Itens {
    padding-right: 40px;
  }
  overflow-x: hidden;
  .react-multi-carousel-list {
    overflow: visible;
  }

  padding-bottom: 40px;

  .react-multiple-carousel__arrow {
    background: ${(props) => props.theme.purpleBackgroundlinear};
    border-radius: 50%;
    z-index: 1000;
    top: 10px;
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
    color: ${(props) => props.theme.green};
    font-size: 30px;
    font-weight: 1000;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.green};
  font-weight: 800;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin: 70px 0;

  &::after {
    content: '';
    bottom: 0;
    position: absolute;
    width: 70px;
    height: 4px;
    background-color: ${(props) => props.theme.green};
    left: calc(50% - 35px);
  }
`;

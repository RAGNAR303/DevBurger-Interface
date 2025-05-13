import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  border-radius: 16px;
  margin: 0 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.orange};
  font-weight: 800;

  button {
    color: #fff;
    background: ${(props) => props.theme.purpleBackgroundlinear};
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    font-size: 30px;
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 0.4s;
    &:hover {
      scale: calc(1.03);
      background: linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88));
    }
    &:active {
      background: linear-gradient(180deg, rgb(95, 56, 105), rgb(53, 26, 59));
    }
  }
`;

export const DeleteProduct = styled.button`
  height: 10px;
  width: 10px;
  cursor: pointer;
  background: none;
  border: none;
  margin-right: 30px;
  transition: all 0.5s;
  &:hover {
    scale: calc(1.08);
  }
`;

export const EmptyCart = styled.div`
  height: 100%;

  span {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
  }
`;

export const ProductTotalPrice = styled.div`
  font-weight: 900;
  color: ${(props) => props.theme.green};
`;

import styled from 'styled-components';

export const Container = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const ProductImage = styled.img`
  display: flex;
  align-items: center;
  width: 100px;
  padding: 5px;
`;
export const GrupButton = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  width: 50%;
  height: 50%;
  border: 0;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
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

  svg {
    width: 25px;
    height: 25px;
    

    &:hover {
      fill: ${(props) => props.theme.orange};
    }
  }
`;

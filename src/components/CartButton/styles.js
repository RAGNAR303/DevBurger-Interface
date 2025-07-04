import styled from 'styled-components';

export const ContainerButton = styled.button`
  background: ${(props) => props.theme.purpleBackgroundlinear};
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 20px;
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

  img {
    width: 30px;

    &:hover {
      color: ${(props) => props.theme.green};
    }
  }
`;

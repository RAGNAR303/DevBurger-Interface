import styled from 'styled-components';

export const ContainerButton = styled.button`
  background: ${(props) => props.theme.purpleBackgroundlinear};
  width: 100%;
  text-align: center;
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
    background: ${(props) => props.theme.hoverPurple};
  }
  &:active {
    background: ${(props) => props.theme.activePurple};
  }

  svg {
    margin-top: 10px;
    width: 30px;
    color: ${(props) => props.theme.white};

    &:hover {
      color: ${(props) => props.theme.green};
    }
  }
`;

import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  border: none;
  height: 45px;
  border-radius: 30px;
  padding: 0 16px;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  font-size: 30px;
  /* font-family: 'Road Rage', sans-serif; */
  font-family: 'Flavors', cursive;
  color: ${(props) => props.theme.white};
  /* color: ${(props) => (props.$red ? '#ffffff ' : 'red')}; */
  transition: 0.5s ease-in-out;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    scale: calc(1.03);
    background: ${(props) => props.theme.hoverPurple};
  }
  &:active {
    background: ${(props) => props.theme.activePurple};
    border: 2px solid ${(props) => props.theme.white};
  }
`;

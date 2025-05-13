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
    background: linear-gradient(180deg, rgb(116, 68, 128), rgb(79, 38, 88));
  }
  &:active {
    background: linear-gradient(180deg, rgb(95, 56, 105), rgb(53, 26, 59));
    border: 2px solid ${(props) => props.theme.white};
  }
`;

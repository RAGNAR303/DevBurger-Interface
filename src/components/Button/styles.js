import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  border: none;
  height: 45px;
  border-radius: 30px;
  padding: 0 16px;
  background: linear-gradient(180deg, #9758a6, #6f357c);
  font-size: 30px;
  /* font-family: 'Road Rage', sans-serif; */
  font-family: "Flavors", cursive;
  color: ${(props) => (props.$red ? '#ffffff ' : 'red')};
  transition: 0.5s ease-in-out;

  &:hover {
    scale: calc(1.03);
    background: linear-gradient(180deg,rgb(116, 68, 128),rgb(79, 38, 88))
  }
  &:active {
    background: linear-gradient(180deg,rgb(116, 68, 128),rgb(79, 38, 88));
    border: 2px solid #ffffff;

    
  }
`;

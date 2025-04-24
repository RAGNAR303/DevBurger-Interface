import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 100%;
  border: none;
  height: 52px;
  border-radius: 30px;
  padding: 0 16px;
  background: linear-gradient(180deg, #9758a6,  #6f357c);
  font-size: 40px;
  font-family: 'Road Rage', sans-serif;
  color: #ffff;
  transition: 0.5s ease-in-out;

  &:hover {
    scale: calc(1.03);
    opacity: 0.9;
  }
  &:active {
    background-color: #9758a6;

  }
`;

import styled from 'styled-components';
import Textura from '../../assets/Textura.jpg';
import BackgraoundSession from '../../assets/fundoB.png';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
export const LeftContainer = styled.div`
  background: url('${Textura}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightContainer = styled.div`
  background: url('${BackgraoundSession}');
  background-size: cover;
  background-position: center;
  background-color: rgb(31, 31, 31);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 50%;

  p {
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      color: ${(props) => props.theme.purple};
      text-decoration: none;
      transition: all 0.5s ease-in-out;
      margin-left: 5px;

      &:hover {
        color: ${(props) => props.theme.orange};
        text-decoration: underline;
      }
    }
  }
`;
export const Title = styled.h2`
  font-family: 'Flavors', cursive;
  color: ${(props) => props.theme.purple};
  font-size: 35px;
  align-items: center;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

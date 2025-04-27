import styled from 'styled-components';
import BackgraoundLogin from '../../assets/backlogin.svg';
import BackgraoundSession from '../../assets/fundoB.png';
import { Link as ReactLink } from 'react-router';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;
export const LeftContainer = styled.div`
  background: url('${BackgraoundLogin}');
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
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    a {
      color: #9758a6;
      text-decoration: underline;
    }
  }
`;
export const Title = styled.h2`
  font-family: 'Flavors', cursive;
  color: #ffffff;
  font-size: 35px;
  align-items: center;
  text-align: center;
  span {
    color: #9758a6;
    font-family: 'Flavors', cursive;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    background: linear-gradient(180deg, #ffffff, rgb(165, 165, 165));
    width: 100%;
    border: none;
    height: 45px;
    border: 2px solid #9758a6;
    border-radius: 30px;
    padding: 0 16px;
  }
  label {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }
  p {
    color: rgb(255, 0, 0);
    font-size: 12px;
    font-weight: 400;
    line-height: 80%;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
`;

import styled from 'styled-components';
import Textura from '../../assets/Textura.svg';
import BackgraoundSession from '../../assets/fundoB.png';


export const Container = styled.div`

  width: 100%;
  min-height: 100vh;
  background: url('${BackgraoundSession}');
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${BackgraoundSession}');
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
`;
export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url('${Textura}');
  background-position: center;
  background-size: cover;
  height: 130px;

  img {
    width: 110px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.green};
  padding-bottom: 12px;
  position: relative;

  &::after {
    bottom: 0;
    position: absolute;
    content: '';
    height: 4px;
    width: 70px;
    background-color:${(props) => props.theme.green};
    left: calc(50% - 35px);
  }
`;

export const Content = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  gap: 40px;
`;

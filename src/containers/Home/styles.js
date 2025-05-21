import styled from 'styled-components';
import BannerHome from '../../assets/bannerhome.svg';
import BackgraoundSession from '../../assets/fundoB.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-position: center;
  background-size: cover;
  height: 370px;
  display: flex;
  width: 100% ;
  
  h1 {
    font-size: 150px;
    font-family: 'Flavors', cursive;
    color: ${(props) => props.theme.purple};
    line-height: 65px;
    position: absolute;
    right: 10%;
    top: 30%;
  }
  span {
    display: block;
    font-family: 'Flavors', cursive;
    color: ${(props) => props.theme.white};
    font-size: 50px;
    font-weight: 400;
    margin-top: 20px;
  }
`;
export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${BackgraoundSession}') no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const Content = styled.div`
  /* padding-bottom: 70px; */
`;

import styled from 'styled-components';
import BannerHome from '../../assets/bannerhome.svg';
import BackgraoundSession from '../../assets/fundoB.png';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-position: center;
  background-size: cover;
  height: 450px;
  display: flex;

  h1 {
    color: #9758a6;
    font-family: 'Flavors', cursive;
    font-size: 100px;
    position: absolute;
    right: 40%;
    top: 20%;
    text-shadow: 10px 10px 10px rgb(0, 0, 0);
  }
  span {
    color: rgb(255, 255, 255);
    font-family: 'Flavors', cursive;
    font-size: 50px;
    position: absolute;
    right: 20%;
    top: 40%;
    text-shadow: 10px 10px 10px rgb(0, 0, 0);
  }
`;
export const Container = styled.section`
  background:
    linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
    url('${BackgraoundSession}');
  background-size: cover;
  background-position: center;

  margin-top: -20;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  /* padding-bottom: 70px; */
`;

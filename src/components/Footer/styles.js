import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.blacklinear};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px 8%;

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    margin: 20px auto;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
  }

  h2 {
    color: ${(props) => props.theme.purple};
    font-weight: 900;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: ${(props) => props.theme.purple};
  }

  p {
    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }
`;

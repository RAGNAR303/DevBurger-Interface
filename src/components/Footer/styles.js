import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 45px;
  background: ${(props) => props.theme.purpleBackgroundlinear};
  text-align: center;
  align-content: center;
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }
`;

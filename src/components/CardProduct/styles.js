import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding: 20px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(211, 211, 211));
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  cursor: grab;
  align-items: center;
  position: relative;
  border: 3px solid #61a120;

  
  div {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme.orange};
    line-height: 20px;
    font-weight: 700;
    margin: 40px 0 20px 0;
  }
  strong {
    font-size: 25px;
    color: ${(props) => props.theme.green};
    font-weight: 900;
    line-height: 20px;
  }
  section{
    display: flex;
    width: 100%;
    gap: 10px
  }
`;

export const CardImage = styled.img`
  height: 100px;
  position: absolute;
  top: -50px;
`;

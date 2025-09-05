import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
    color: ${(props) => props.theme.white};
    font-weight: 900;
  }

  span {
    color: rgb(255, 0, 0);
    font-size: 12px;
    font-weight: 400;
    line-height: 80%;
    height: 10px;
    margin-top: 5px;
    text-align: center;
  }
`;

export const InputForm = styled.div`
  background: ${(props) => props.theme.purpleBackgroundlinear};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  padding: 2px;

  svg {
    color: ${(props) => props.theme.green};
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }

  input {
    background: transparent;
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 20px;
    background: ${(props) => props.theme.whiteBackgroundlinear};
  }
`;

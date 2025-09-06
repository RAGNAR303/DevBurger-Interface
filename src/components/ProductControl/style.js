import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.orange};
  font-weight: 800;
  background: ${(props) => props.theme.blacklinear};
  border-radius: 30px;
  button {
    color: #fff;
    background: ${(props) => props.theme.purpleBackgroundlinear};
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    font-size: 30px;
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 0.4s;
    &:hover {
      scale: calc(1.03);
      background: ${(props) => props.theme.hoverPurple};
    }
    &:active {
      background: ${(props) => props.theme.activePurple};
    }
  }
`;

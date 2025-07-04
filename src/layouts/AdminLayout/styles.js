import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.blackBackgroundlinear};
    overflow-y: auto;
  }
  section {
    margin: 0 auto;
    padding: 40px 20px;
    max-width: 1200px;
    width: 100%;
  }
`;

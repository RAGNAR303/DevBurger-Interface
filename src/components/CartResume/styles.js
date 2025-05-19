import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(211, 211, 211));
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
  text-align: center;
  max-width: 300px;
  width: 100%;
  * {
    font-weight: 900;
    color: rgb(37, 37, 37);
  }

  .container-top {
    display: grid;
    grid-gap: 10px 40px;
    grid-template-areas:
      'title title'
      'item itens-price'
      'delivery delivery-price';
    border-bottom: 2px solid ${(props) => props.theme.orange};
  }
  .title {
    grid-area: title;
    background: linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12));
    border-radius: 20px 20px 0 0;
    color: ${(props) => props.theme.orange};
    padding: 14px;
    border-bottom: 2px solid ${(props) => props.theme.orange};

    font-weight: 200;
    font-size: 20px;
  }
  .item {
    grid-area: item;
    /* margin-left: 10px; */
    padding: 15px;
  }
  .itens-price {
    grid-area: itens-price;
    margin-right: 10px;
    padding: 15px;
  }
  .delivery {
    grid-area: delivery;
    /* margin-left: 10px; */
    padding: 15px;
  }
  .delivery-price {
    grid-area: delivery-price;
    margin-right: 10px;
    padding: 15px;
  }

  .container-button {
    display: grid;
    grid-gap: 10px 40px;
    grid-template-areas: 'item-total item-total-price';
    padding: 20px;

    font-size: 24px;
  }
  .item-total {
    grid-area: item-total;
  }
  .item-total-price {
    grid-area: item-total-price;
    margin: 0;
  }
`;

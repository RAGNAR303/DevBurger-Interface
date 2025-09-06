import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  margin: 0 10px;
`;

export const DeleteProduct = styled.button`
  height: 10px;
  width: 10px;
  cursor: pointer;
  background: none;
  border: none;
  margin-right: 30px;
  transition: all 0.5s;
  &:hover {
    scale: calc(1.08);
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  span {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
  }
`;

export const ProductTotalPrice = styled.div`
  font-weight: 900;
  color: ${(props) => props.theme.green};
`;

import styled from 'styled-components';
import Select from 'react-select';
export const ProductsImg = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
`;
export const SelectStatus = styled(Select)`
  width: 240px;
  border-radius: 15px;

  .tableContainer {
    background: linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12));
  }
`;
export const TableContainer = styled.div`
  background: linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12));
`;
export const Filter = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 28px 0;
  gap: 12px;
  background: ${(props) => props.theme.blacklinear};
  padding: 15px;
  border-radius: 10px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.$isActiveStatus ? props.theme.purpleBackgroundlinear : 'none'};
  border: none;
  color: ${(props) =>
    props.$isActiveStatus ? props.theme.green : props.theme.purple};
  font-size: 17px;
  line-height: 20px;
  padding: 5px;
  border-radius: 10px;
  text-shadow: ${(props) =>
    props.$isActive ? '0px 0px 7px rgba(42, 251, 0, 0.69)' : 'none'};
`;

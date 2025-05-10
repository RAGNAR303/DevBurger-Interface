import styled from 'styled-components';
export const Root = styled.table`
  text-align: center;
  width: 100%;
  border-collapse: collapse;
  background: linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12));
  border-radius: 20px;

  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Header = styled.thead`
  font-weight: 800;
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  font-size: 20px;
  padding: 16px;
  text-align: center;
  color: #ff8c05;
  border-bottom: 2px solid #ff8c05;

  border-top-right-radius: 20px;

  border-top-left-radius: 20px;
`;
export const Td = styled.td`
  padding: 16px;
  font-weight: 600;
  line-height: 115%;
`;
export const Body = styled.tbody`
  background: linear-gradient(180deg, rgb(255, 255, 255), rgb(211, 211, 211));
  border-radius: 0 0 20px 20px;
`;

export const Footer = styled.tfoot`
  border-radius: 0 0 20px 20px;
  display: flex;
  
  justify-content: center;
`;

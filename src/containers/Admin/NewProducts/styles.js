import styled from 'styled-components';
import ReactSelect from 'react-select';
import { Button } from '../../../components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  padding: 32px;
  background: ${(props) => props.theme.blacklinear};
  box-shadow: ${(props) => props.theme.blackShadow1};
  gap: 25px;
`;
export const GrupInputTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
export const GrupInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 15px 0;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.purple};
  font-size: 17px;
`;
export const Input = styled.input`
  background: ${(props) => props.theme.whiteBackgroundlinear};
  width: 100%;
  border: none;
  height: 41px;
  border: 2px solid ${(props) => props.theme.purple};
  border-radius: 30px;
  padding: 0 16px;
`;
export const LabelUpload = styled.label`
  cursor: pointer;
  width: 100%;
  /* height: 40px; */
  display: flex;
  text-align: center;
  border: 2px dashed ${(props) => props.theme.green};
  border-radius: 10px;
  padding: 12px;
  color: ${(props) => props.theme.green};
  font-size: 15px;
  align-content: center;
  > svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.green};
    margin-right: 4px;
  }
  input {
    display: none;
    gap: 10px;
  }
  input:hover {
    content: '';
  }
`;
export const Select = styled(ReactSelect)`
  border-radius: 30px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.purple};
`;
export const ContianerCheckBox = styled.div`
  display: flex;
  margin: 10px auto;
  align-content: center;
  gap: 20px;

  input{
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const ErroMessage = styled.span`
  text-align: center;
  color: ${(props) => props.theme.red};
  line-height: 80%;
  font-size: 14px;
  font-weight: 800;
`;

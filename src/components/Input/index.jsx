
import { Container, InputForm } from './styles';

export function Input({ error, label, icon, placeholder, type, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <InputForm>
        {icon}
        <input {...rest} type={type} placeholder={placeholder} />
      </InputForm>
      <span>{error}</span>
    </Container>
  );
}

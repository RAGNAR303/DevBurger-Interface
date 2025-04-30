import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';

export function Login() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup
        .string()
        .email('* Digite um e-mail válido')
        .required(' * Digite seu e-mail para continuar'),
      password: yup
        .string()
        .min(8, '* A senha deve ter no minimo 8 caracteres')
        .required('* Digite sua SENHA para continuar'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const {
      data: { token },
    } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seu dados 🕣',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return 'Seja Bem-vindo(a) ✅';
          },
        },
        error: 'Email ou Senha Incorretos ⛔',
      },
    );

    localStorage.setItem('token', token);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burger!!</span>
          <br /> Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email:</label>
            <input
              placeholder="exemplo@email.com"
              type="email"
              {...register('email')}
            />{' '}
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha:</label>
            <input
              placeholder="************"
              type="password"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button $red="red" type="submit">
            Entrar
          </Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

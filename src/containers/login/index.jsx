import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Form,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { EnvelopeSimple, Lock } from '@phosphor-icons/react';
import { Input } from '../../components/Input';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();
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
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seu dados 🕣',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 2000);
            return 'Seja Bem-vindo(a) ✅';
          },
        },
        error: 'Email ou Senha Incorretos ⛔',
      },
    );
    putUserData(userData);
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
          <Input
            type={'email'}
            label={'Email:'}
            icon={<EnvelopeSimple />}
            placeholder={'exemplo@email.com'}
            {...register('email')}
            error={errors?.email?.message}
          />
          <Input
            type={'password'}
            placeholder={'digite sua senha'}
            icon={<Lock />}
            label={'Senha:'}
            {...register('password')}
            error={errors?.password?.message}
          />
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

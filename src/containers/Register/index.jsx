import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';


export function Register() {
  const schema = yup
    .object({
      name: yup.string().required('* O nome é Obrigatório'),
      email: yup
        .string()
        .email('* Digite um e-mail válido')
        .required('* Digite seu e-mail para continuar'),
      password: yup
        .string()
        .min(8, '* A senha deve ter no minimo 8 caracteres')
        .required('* Digite sua SENHA para continuar'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], '* As senhas devem ser iguais').required('* Confirma sua senha'),
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
    const response = await toast.promise(
      api.post('users', {
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando seu dados 🕣',
        success: 'Usuarios(a) cadastrado com sucesso ✅',
        error: 'Ops, algo deu errado! Tente novamente. ⛔',
      },
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar Cadastro
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome:</label>
            <input
              placeholder="Coloque seu nome"
              type="nome"
              {...register('name')}
            />{' '}
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirme a Senha:</label>
            <input
              placeholder="************"
              type="password"
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button $red="red" type="submit">
            Cadastrar
          </Button>
        </Form>
        <p>
          Já tem conta? <a href="">Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}

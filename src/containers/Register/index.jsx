import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import {
  Container,
  Form,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { EnvelopeSimple, Lock, User } from '@phosphor-icons/react';

export function Register() {
  const navigate = useNavigate();
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
        .oneOf([yup.ref('password')], '* As senhas devem ser iguais')
        .required('* Confirma sua senha'),
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso! ✅');
      } else if (status === 409) {
        toast.success('Email já cadastrado! Faça o login para continuar ☑️ !');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error(' Falha no sistema! Tente novamente!⛔ ');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Cadastro</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={'Nome:'}
            icon={<User />}
            placeholder={'Coloque seu nome'}
            type={'nome'}
            {...register('name')}
            error={errors?.name?.message}
          />
          <Input
            label={'Email:'}
            icon={<EnvelopeSimple />}
            placeholder={'exemplo@email.com'}
            type={'email'}
            {...register('email')}
            error={errors?.email?.message}
          />
          <Input
            type={'password'}
            placeholder={'digite sua senha...'}
            icon={<Lock />}
            label={'Senha:'}
            {...register('password')}
            error={errors?.password?.message}
          />
          <Input
            label={'Confirme a Senha:'}
            icon={<Lock />}
            placeholder={'Confirme a Senha...'}
            type={'password'}
            {...register('confirmPassword')}
            error={errors?.confirmPassword?.message}
          />
          <Button $red="red" type="submit">
            Cadastrar
          </Button>
        </Form>
        <p>
          Já tem conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}

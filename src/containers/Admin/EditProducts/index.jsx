import { Controller, set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  SubmitButton,
  ErroMessage,
  GrupInputTwo,
  GrupInput,
  ContianerCheckBox,
} from '../NewProducts/styles';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Selecione uma categoria para continuar'),
  offer: yup.bool(),
});

export function EditProducts() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const {
    state: { product },
  } = useLocation();
  console.log(product);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }
    loadCategories();
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);

    const productFormData = new FormData();
    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: 'Editando o produto....',
      success: 'Produto Editado com sucesso',
      error: 'Falha em editar o produto , tente novamente',
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GrupInput>
          <InputGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              defaultValue={product.name}
            />
            <ErroMessage>{errors?.name?.message}</ErroMessage>
          </InputGroup>
          <InputGroup>
            <Label>Preço</Label>
            <Input
              type="number"
              {...register('price')}
              defaultValue={product.price / 100}
            />
            <ErroMessage>{errors?.price?.message}</ErroMessage>
          </InputGroup>
          <InputGroup>
            <LabelUpload>
              <Image />
              <input
                type="file"
                {...register('file')}
                accept="image/png , image/jpeg , image/jpg"
                onChange={(value) => {
                  setFileName(value.target.files[0]?.name);
                  register('file').onChange(value);
                }}
              />
              {fileName || 'Upload do Produto'}
            </LabelUpload>
            <ErroMessage>{errors.file?.message}</ErroMessage>
          </InputGroup>
        </GrupInput>
        <GrupInputTwo>
          <InputGroup>
            <Label>Categorias</Label>
            <Controller
              name="category"
              control={control}
              defaultValue={product.category}
              render={({ field }) => (
                <Select
                  {...field}
                  menuPortalTarget={document.body}
                  options={categories}
                  getOptionLabel={(category) => category.name}
                  getOptionValue={(category) => category.id}
                  placeholder="Categorias"
                  defaultValue={product.category}
                />
              )}
            />
            <ErroMessage>{errors?.category?.message}</ErroMessage>
          </InputGroup>
          <InputGroup>
            <ContianerCheckBox>
              <input
                type="checkbox"
                defaultChecked={product.offer}
                {...register('offer')}
              />
              <Label>Produto em Oferta</Label>
            </ContianerCheckBox>
          </InputGroup>
          <SubmitButton>Editar Produto</SubmitButton>
        </GrupInputTwo>
      </Form>
    </Container>
  );
}

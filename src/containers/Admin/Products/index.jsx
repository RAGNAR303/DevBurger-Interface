import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, EditButton, ProductImage, GrupButton } from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  CheckCircle,
  Pencil,
  TrashSimple,
  XCircle,
} from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Theme } from '../Orders/theme';

export function Products() {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function loadProtucts() {
      const { data } = await api.get('/products');
      setproducts(data);
      console.log(data);
    }
    loadProtucts();
  }, []);

  function isOffer(offer) {
    if (offer) {
      return <CheckCircle weight="duotone" color=" #61a120" fontSize={32} />;
    } else {
      return (
        <XCircle weight="duotone" color="rgb(233, 10, 10)" fontSize={32} />
      );
    }
  }

  function editProduct(product) {
    navigate('/admin/editar-produto', { state: { product } });
  }

  return (
    <Container>
      <ThemeProvider theme={Theme}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow align="center">
                <TableCell>Nome</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>oferta</TableCell>
                <TableCell align="center">Item</TableCell>
                <TableCell align="center">Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  align="center"
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatPrice(product.price)}</TableCell>
                  <TableCell>{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <ProductImage src={product.url} />
                  </TableCell>
                  <TableCell>
                    <GrupButton>
                      <EditButton onClick={() => editProduct(product)}>
                        <Pencil />
                      </EditButton>
                      <EditButton onClick={() => editProduct(product)}>
                        <TrashSimple />
                      </EditButton>
                    </GrupButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </Container>
  );
}

import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import Trash from '../../assets/trash.svg';
import { Button } from '../index';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import {
  ButtonGroup,
  DeleteProduct,
  EmptyCart,
  ProductImage,
  ProductTotalPrice,
} from './styles';
export function CartItens() {
  const { cartProducts, increseProduct, decreseProduct, deleteProduct } =
    useCart();
  const navigate = useNavigate();
  // console.log(cartProducts);
  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th>Itens</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt="imgProducts" />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.currencyValue}</Table.Td>
              <Table.Td>
                <ButtonGroup>
                  <button onClick={() => decreseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increseProduct(product.id)}>+</button>
                </ButtonGroup>
              </Table.Td>
              <Table.Td>
                <ProductTotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </ProductTotalPrice>
              </Table.Td>
              <Table.Td>
                <DeleteProduct>
                  <img src={Trash} onClick={() => deleteProduct(product.id)} />
                </DeleteProduct>
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td colSpan={7}>
              <EmptyCart>
                <span>Não há itens no carrinho</span>
              </EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
        <Table.Tr>
          <Table.Td colSpan={7}>
            <Table.Footer >
              <Button
                onClick={() => navigate('/cardapio')}
                style={{
                  height: 40,
                  width: 230,
                  fontSize: 18,
                }}
              >
                Adicinar mais produts
              </Button>
            </Table.Footer>
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table.Root>
  );
}

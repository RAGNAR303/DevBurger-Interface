import { Table } from '../index';
import { useCart } from '../../hooks/CartContext';
import Trash from '../../assets/trash.svg';
// import { Trash } from '@phosphor-icons/react';
import { formatPrice } from '../../utils/formatPrice';
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

  console.log(cartProducts);
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
              <EmptyCart>Não há itens no carrinho</EmptyCart>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Body>
    </Table.Root>
  );
}

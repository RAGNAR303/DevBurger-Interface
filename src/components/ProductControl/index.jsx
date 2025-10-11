import { useCart } from '../../hooks/CartContext';
import { Container } from './style';

export function ProductControl({ product }) {
  const { decreseProduct, increseProduct } = useCart();


  return (
    <Container>
      <button onClick={() => decreseProduct(product.id)}>-</button>
      {product.quantity > 0 ? product.quantity : 0}
      <button onClick={() => increseProduct(product.id)}>+</button>
    </Container>
  );
}

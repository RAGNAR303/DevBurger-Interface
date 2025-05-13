import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';
import { Button } from '../../components';
export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <dir>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </dir>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
      {/* <Button>Carrinho</Button> */}
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

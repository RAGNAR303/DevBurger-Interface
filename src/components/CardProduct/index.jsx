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
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <section>
        <CartButton onClick={() => putProductInCart(product)}></CartButton>
        {/* <CartButton onClick={() => putProductInCart(product)}>Carrinho</CartButton> */}
    </section>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

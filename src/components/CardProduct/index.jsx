import PropTypes from 'prop-types';
import { CardImage, Container } from './styles';
import { CartButton } from '../CartButton';

export function CardProduct({ product }) {

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <dir>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </dir>
      <CartButton></CartButton>
    </Container>
  );
}

CardProduct.propType = {
  product: PropTypes.object,
};

import PropTypes from 'prop-types';
import { CardImage, CartInfo, Container } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';
import { Basket, Plus, Heart } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function CardProduct({ product }) {
  // console.log({ product });

  const navigate = useNavigate();
  const { putProductInCart, increseProduct, decreseProduct, cartProducts } =
    useCart();

  console.log(cartProducts.quantity);

  return (
    <Container>
      <span>
        {' '}
        {product.offer ? (
          <Heart size={28} weight="fill" />
        ) : (
          <Heart size={28} weight="light" />
        )}
      </span>
      <CardImage src={product.url} alt={product.name} />
      <main>
        <h1>{product.name}</h1>
        <CartInfo>
          <strong>{product.currencyValue}</strong>
          <p>Qtd: {product.quantity}</p>
        </CartInfo>
      </main>
      <section>
        <CartButton
          icon={<Plus size={28} weight="bold" />}
          onClick={() => putProductInCart(product)}
        />
        {/* <CartButton
          icon={<Plus size={28} weight="bold" />}
          onClick={() => handleIncreseProduct(product)}
        /> */}

        <CartButton
          onClick={() => navigate('/carrinho')}
          icon={<Basket size={28} weight="bold" />}
        ></CartButton>
      </section>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};

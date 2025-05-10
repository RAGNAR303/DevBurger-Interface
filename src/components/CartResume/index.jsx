import { Button } from '../Button';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';
export function CartResume() {
  const [finalPrice, setFinalPrice] = useState();
  const [deliveryTax] = useState(500);
  const { cartProducts, clearCart } = useCart();
  const { userInfo } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((products) => {
      return {
        id: products.id,
        quantity: products.quantity,
        price: products.price,
      };
    });

    try {
      const {data} = await api.post('/create-payment-intent', { products });
      navigate('/checkout', {
        state: data,
      });
    } catch (err) {
      toast.error('Erro , tente novamente!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

  };
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="item">Itens</p>
          <p className="itens-price">{formatPrice(finalPrice)}</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="delivery-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="container-button">
          <p className="item-total">Total</p>
          <p className="item-total-price">
            {formatPrice(finalPrice + deliveryTax)}
          </p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}

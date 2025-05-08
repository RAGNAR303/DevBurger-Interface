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
      return { id: products.id, quantity: products.quantity };
    });
    try {
      const { status } = await api.post(
        '/orders',
        {
          user: {
            name: userInfo.name,
          },
          products
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
        toast.success('Pedido realizado com sucesso! ✅');
      } else if (status === 409) {
        toast.success('Falha em realizar seu pedido ⛔ !');
      } else {
        throw new Error();
      }
      console.log(status);
    } catch (error) {
      toast.error(' Falha no sistema! Tente novamente!❌ ');
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

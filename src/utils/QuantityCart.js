import { useCart } from '../hooks/CartContext';

const QuantityCartNum = () => {
  const { cartProducts } = useCart();
  console.log(cartProducts);
  const cartQuantity = cartProducts.reduce((acc, products) => {
    return { ...pros, quantity: products.quantity + acc };
  }, 0);

  return cartQuantity;
};
console.log(QuantityCartNum);

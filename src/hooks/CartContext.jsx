import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setcartProducts] = useState([]);
  // adicinar produto
  const putProductInCart = (product) => {
    console.log(product);
  };
  // limpar o carrinho
  const clearCart = () => {};
  // deletar produto do carrinho
  const deleteProduct = (product) => {};
  // acresentar quantidade
  const increseProduct = (productId) => {};
  // diminuir quantidade
  const decreseProduct = (productId) => {};
  return (
    <CartContext.Provider
      value={
        (cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increseProduct,
        decreseProduct)
      }
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context');
  }

  return context;
};

import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setcartProducts] = useState([]);
  // adicinar produto
  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
    let newProductsInCart = [];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts;

      newProductsInCart[cartIndex].quantity =
        newProductsInCart[cartIndex].quantity + 1;
      setcartProducts(newProductsInCart);
    } else {
      product.quantity = 1;
      newProductsInCart = [...cartProducts, product];
      setcartProducts(newProductsInCart);
    }
    updateLocalStorage(newProductsInCart);
  };

  // limpar o carrinho
  const clearCart = () => {
    setcartProducts([]);
    updateLocalStorage([]);
  };

  // deletar produto do carrinho
  const deleteProduct = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);
    setcartProducts(newCart);
    updateLocalStorage(newCart);
  };
  // acresentar quantidade
  const increseProduct = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });
    setcartProducts(newCart);
    updateLocalStorage(newCart);
  };
  // diminuir quantidade
  const decreseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });
      updateLocalStorage(newCart);
      setcartProducts(newCart);
    } else {
      deleteProduct(productId);
    }

    setcartProducts(newCart);
  };
  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
  };
  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo');
    if (clientCartData) {
      setcartProducts(JSON.parse(clientCartData));
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProduct,
        increseProduct,
        decreseProduct,
      }}
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

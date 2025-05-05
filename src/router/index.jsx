import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/Login/index';
import { Register } from '../containers/Register/index';
import { Home } from '../containers/Home';
import { Menu } from '../containers/Menu';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart } from '../containers/Cart';
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/carrinho',
    element: <Cart/>
  }
]);

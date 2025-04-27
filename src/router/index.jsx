import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/Login/index';
import { Register } from '../containers/Register/index';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
]);

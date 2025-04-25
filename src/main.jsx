import React from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router/index';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer, Zoom } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer
      autoClose={3000}
      theme="dark"
      position="bottom-center"
      transition={Zoom}
    />
  </React.StrictMode>,
);

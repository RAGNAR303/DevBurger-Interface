import React from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router/index';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer, Zoom } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import AppProvider from './hooks';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer
        autoClose={3000}
        theme="dark"
        position="bottom-center"
        transition={Zoom}
      />
    </AppProvider>
  </React.StrictMode>,
);

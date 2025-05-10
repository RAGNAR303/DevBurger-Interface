import React from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './router/index';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer, Zoom } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise  }>
        <RouterProvider router={router} />
      </Elements>
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

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router} from './router/index';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer, Zoom } from 'react-toastify';

import AppProvider from './hooks';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <Elements stripe={stripePromise  }>
       <BrowserRouter>
       <Router />
       </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer
        autoClose={3000}
        theme="dark"
        position="bottom-center"
        transition={Zoom}
      />
    </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';
import './App.css';
import App from './App.jsx';

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  headings: {
    fontFamily: 'Lora, serif',
  },
  colors: {
    'brand-primary': ['#f2dbe6', '#e5b7ce', '#d893b5', '#cb6f9d', '#bf4b84', '#950753', '#770642', '#590432', '#3c0321', '#1e0111'],
    'brand-secondary': ['#fce9e7', '#f8d3cf', '#f5bdb6', '#f1a79e', '#ed9186', '#e35342', '#b54235', '#883228', '#5a211a', '#2d110d'],
    'brand-accent': ['#fff4e4', '#ffe8c8', '#ffddad', '#ffd191', '#ffc575', '#ffb11e', '#cc8e18', '#996a12', '#66470c', '#332306'],
  },
  primaryColor: 'brand-primary',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);

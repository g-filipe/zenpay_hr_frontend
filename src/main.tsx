import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from '../src/components/Login';
import Alimentacao from '../src/components/Alimentacao'
import './index.css';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    purple: {
      500: '#9b59b6',
    },
    black: {
      500: '#111',
    },
    white: {
      500: '#fff',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<App />} />
          <Route path="/alimentacao" element={<Alimentacao />} /> {/* Nova rota */}
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

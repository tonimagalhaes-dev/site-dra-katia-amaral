import React from 'react';
import ReactDOM from 'react-dom/client'; // 1. Volte a usar ReactDOM
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// 2. Volte a usar createRoot().render() para evitar o erro de hidratação
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

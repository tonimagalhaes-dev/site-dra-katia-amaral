import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // 1. Importe o HelmetProvider
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Envolva o App com o HelmetProvider */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

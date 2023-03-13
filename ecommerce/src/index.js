import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import EcommerceProvider, { EcommerceContext } from './components/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <EcommerceProvider>
        <App />
    </EcommerceProvider>
  </BrowserRouter>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Provider } from 'react-redux';
import { EcommerceApp } from './EcommerceApp';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <BrowserRouter>
        <EcommerceApp />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
)

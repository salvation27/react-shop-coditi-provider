import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {ProductProvider} from './components/Context'

ReactDOM.render(
  <ProductProvider>
      <BrowserRouter>  
            <App />
      </BrowserRouter>
  </ProductProvider>
    ,
  document.getElementById('root')
);


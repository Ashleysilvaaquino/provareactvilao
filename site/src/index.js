import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import consultar from '../src/pages/consultar/consultarviloes.js';

import cadastrar from '../src/pages/cadastrar/cadastrarvilao.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<cadastrar/>}/>
        <Route path = '/consultar' element ={<consultar/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



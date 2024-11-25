import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {createHashRouter, RouterProvider} from 'react-router-dom';

import Products from "./components/products/Products";
import Product from "./components/product/Product";
import NotFound from './components/notFound/notFound';
import App from './App';

const router = createHashRouter([
  {
      path: '/products',
      element: <Products />
  },
  {
    path: '/product/:id',
    element: <Product />
  },
  {
    path: '/*',
    element: <NotFound />
  }
])
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  )
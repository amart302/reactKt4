import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {createHashRouter, RouterProvider} from 'react-router-dom';
import App from './App';

const router = createHashRouter([
  {
      path: '/*',
      element: <App/>
  }
])
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  )
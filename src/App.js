import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Products from "./components/products/Products";
import Product from "./components/product/Product";
import NotFound from './components/notFound/notFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
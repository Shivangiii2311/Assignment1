import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import ProductDetails from './Pages/ViewProductDetails';
import ProductList from './Pages/Products';
import Cart from './Pages/Cart';
import { productData } from './Data';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const updateQuantity = (index, quantity) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/product">Shivu's Shop</Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mr-2">
          <li className="nav-item">
              <Link className="nav-link" to="/product">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="Container m-3">
        <Routes>
          <Route path="/" element={<ProductList productData={productData} updateQuantity={updateQuantity} addItemToCart={addItemToCart} />} />
          <Route path="/product" element={<ProductList productData={productData} updateQuantity={updateQuantity} addItemToCart={addItemToCart} />} />
          <Route path="/product/:id" element={<ProductDetails productData={productData} addItemToCart={addItemToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItemFromCart={removeItemFromCart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

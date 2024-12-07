import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Profile from './components/Profile';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';

function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    console.log('Пользователь зарегистрирован:', userData);
    setUser(userData); // Устанавливаем зарегистрированного пользователя
  };

  const handleLogin = (userData) => {
    console.log('Пользователь авторизован:', userData);
    setUser(userData); // Устанавливаем авторизованного пользователя
  };

  const handleLogout = () => {
    setUser(null); // Выход из системы
  };

  return (
    <UserProvider value={{ user, setUser }}>
      <CartProvider>
        <Router>
          {/* Условный рендеринг Header */}
          {window.location.pathname !== '/' && <Header user={user} onLogout={handleLogout} />}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
          
          {window.location.pathname !== '/' && <Footer />}
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
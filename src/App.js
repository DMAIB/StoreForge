import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import Profile from './components/Profile'; // Импортируем компонент Profile

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={
            <>
              <Header />
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/profile" element={<Profile />} /> {/* Добавляем маршрут для профиля */}
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
  );
}

export default App;


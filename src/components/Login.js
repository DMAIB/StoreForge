import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'; // Импортируем axios для работы с API

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Здесь вы можете заменить URL на ваш API
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Если вход прошел успешно, сохраняем токен и перенаправляем на страницу профиля
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/profile');
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
      alert('Неверные учетные данные. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Электронная почта:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;




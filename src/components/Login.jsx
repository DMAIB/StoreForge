import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'; // Импортируем контекст
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Состояние для индикатора загрузки
  const navigate = useNavigate();
  const { login } = useContext(UserContext); // Получаем метод login из контекста

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true); // Устанавливаем состояние загрузки

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, name, phone } = response.data; // Получаем токен, имя и номер телефона из ответа
        login({ token, email, name, phone }); // Сохраняем токен, email, имя и номер телефона через контекст
        localStorage.setItem('token', token); // Сохраняем токен в локальном хранилище
        navigate('/profile'); // Перенаправляем пользователя на страницу профиля
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
      if (error.response && error.response.status === 401) {
        setErrorMessage('Неправильная электронная почта или пароль. Попробуйте еще раз.');
      } else {
        setErrorMessage('Произошла ошибка. Попробуйте позже.');
      }
    } finally {
      setLoading(false); // Сбрасываем состояние загрузки
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="page-background">
      <div className="login-container">
        <h2>Вход</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input 
              type="email"
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              autoComplete="off" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              autoComplete="off" 
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>Войти</button>
          {loading && <p className="loading">Загрузка...</p>} {/* Индикатор загрузки */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
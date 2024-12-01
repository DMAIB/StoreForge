import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios'; // Импортируем axios для работы с API

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    try {
      // Здесь вы можете заменить URL на ваш API
      const response = await axios.post('http://localhost:3000/api/register', {
        name,
        email,
        phone,
        password,
      });

      if (response.status === 201) {
        // Если регистрация прошла успешно, перенаправляем на страницу входа
        navigate('/login');
      }
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      alert('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <div className="page-background">
      <div className="register-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="phone">Номер телефона:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="confirm-password">Повторите пароль:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;



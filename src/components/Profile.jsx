import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from 'axios'; // Импортируем axios
import './Profile.css';

const Profile = () => {
  const { user, isLoggedIn, logout } = useContext(UserContext);
  const [profileData, setProfileData] = useState(null); // Состояние для хранения данных профиля
  const [loading, setLoading] = useState(true); // Индикатор загрузки
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('token'); // Извлекаем токен из localStorage
    if (token) {
      // Делаем запрос к API для получения данных профиля
      axios.get('http://localhost:3000/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
      })
      .then(response => {
        setProfileData(response.data); // Сохраняем данные профиля
        setLoading(false); // Устанавливаем индикатор загрузки в false
      })
      .catch(error => {
        console.error('Ошибка при получении данных профиля:', error);
        setLoading(false); // Устанавливаем индикатор загрузки в false даже в случае ошибки
      });
    }
  }, [isLoggedIn, navigate]);

  if (loading) {
    return <p>Загрузка...</p>; // Индикатор загрузки
  }

  return (
    <div className="profile-container">
      {profileData ? ( // Используем данные профиля, полученные с API
        <>
          <div className="profile-header">
            <img
              className="profile-picture"
              src="https://www.nchti.ru/wp-content/images/profile-anonymous2.png"
              alt="Профиль пользователя"
            />
            <h1 className="profile-name">{profileData.name}</h1>
            <p className="profile-email">Email: {profileData.email}</p>
            <p className="profile-phone">Телефон: {profileData.phone}</p>
          </div>
          <button className="edit-button">Редактировать профиль</button>
          <button className="logout-button" onClick={logout}>
            Выйти
          </button>
        </>
      ) : (
        <p>Вы вышли из профиля. Пожалуйста, войдите снова.</p>
      )}
    </div>
  );
};

export default Profile;

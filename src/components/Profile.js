// components/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-picture"
          src="https://www.nchti.ru/wp-content/images/profile-anonymous2.png"
          alt="Профиль пользователя"
        />
        <h1 className="profile-name">Имя пользователя</h1>
        <p className="profile-email">Email: example@example.com</p>
        <p className="profile-phone">Телефон: +7 (123) 456-78-90</p>
      </div>
      <button className="edit-button">Редактировать профиль</button>
      <button className="logout-button">Выйти</button> {/* Кнопка выхода без логики */}
    </div>
  );
};

export default Profile;


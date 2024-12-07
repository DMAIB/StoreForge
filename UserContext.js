import React, { createContext, useState } from 'react';

// Создаем контекст
export const UserContext = createContext();

// Создаем провайдер
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Функция для входа
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  // Функция для выхода
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


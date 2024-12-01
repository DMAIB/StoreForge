const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

let users = []; // Массив для хранения пользователей

app.use(express.json({ limit: '10mb' })); // Увеличьте лимит по необходимости
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Middleware для логирования заголовков
app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  next();
});

// Регистрация
app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ name, email, phone, password: hashedPassword });

  res.status(201).json({ message: 'Пользователь зарегистрирован' });
});

// Вход
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Пользователь не найден' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ token: null, message: 'Неверный пароль' });
  }

  const token = jwt.sign({ id: user.email }, 'secret-key', { expiresIn: 86400 }); // expires in 24 hours

  res.status(200).json({ token, user });
});
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

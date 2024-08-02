// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте логику для авторизации пользователя
    // Если успешно, перенаправить пользователя на главную страницу
    navigate('/');
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;

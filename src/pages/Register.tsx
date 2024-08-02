// src/pages/Register.tsx
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте логику для регистрации пользователя
    // Если успешно, перенаправить пользователя на главную страницу
    navigate('/');
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;

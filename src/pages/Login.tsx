// src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate ();

  const handleLogin = () => {
    // Пример логики аутентификации
    if (email === 'email' && password === 'password') {
      // Сохранение информации о пользователе
      localStorage.setItem('isAuthenticated', 'true');
      // Перенаправление на главную страницу
      navigate('/');
    } else {
      alert('Неправильный логин или пароль');
    }
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

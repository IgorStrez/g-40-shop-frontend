// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Мистический Магазин Мавроди. Все права защищены.</p>
      <p>Контакты: info@mysticshop.com | Телефон: +7 (123) 456-78-90</p>
    </footer>
  );
};

export default Footer;

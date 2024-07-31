
const Footer = () => (
  <footer style={{ backgroundColor: '#000', color: '#fff' }} className="py-4">
    <div className="container text-center">
      <p>© {new Date().getFullYear()} Мистический Магазин Мавроди</p>
      <p>
        <a href="mailto:info@mavrodi.com" style={{ color: '#fff' }}>info@mavrodi.com</a>
      </p>
      <p>
        <a href="/privacy-policy" style={{ color: '#fff' }}>Политика конфиденциальности</a>
      </p>
    </div>
  </footer>
);

export default Footer;
// src/pages/HomePage.tsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/styles/HomePage.css';

const products = [
  { id: 1, name: 'Категория 1', description: 'Описание товаров категории 1.', imageUrl: 'url_to_some_image' },
  { id: 2, name: 'Категория 2', description: 'Описание товаров категории 2.', imageUrl: 'url_to_some_image' },
  { id: 3, name: 'Категория 3', description: 'Описание товаров категории 3.', imageUrl: 'url_to_some_image' },
];

const HomePage = () => {
  return (
    <Container className="container">
      <Row>
        <Col>
          <h1 className="home-header">Добро пожаловать в Мистический Магазин Мавроди!</h1>
          <p className="home-description">Добро пожаловать в наш магазин Книг и Сувениров, наполненные Тайной и Мистикой. У нас вы найдете уникальные товары, связанные с наследием Сергея Мавроди.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="card">
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title className="card-title">{product.name}</Card.Title>
                <Card.Text className="card-text">{product.description}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button className="btn-primary">Посмотреть</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;

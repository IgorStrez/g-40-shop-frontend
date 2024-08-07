// src/pages/HomePage.tsx
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/styles/HomePage.css';

const products = [
  { id: 1, name: 'Книга', description: 'Том №1', imageUrl: 'url_to_some_image' },
  { id: 2, name: 'Сувенир', description: 'Кружка СПМ', imageUrl: 'url_to_some_image' },
  { id: 3, name: 'Театральный билет', description: 'Билет в Театр', imageUrl: 'url_to_some_image' },
];

const HomePage = () => {
  return (
    <Container className="container">
      <Row>
        <Col>
          <h1 className="home-header">Мистический Магазин Мавроди приветствует Вас!</h1>
          <p className="home-description">Вы найдете у нас уникальные товары, связанные с наследием Сергея Мавроди.</p>
          <p className="home-description">В нашем Магазине всё наполнено Тайной и Мистикой.</p>
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

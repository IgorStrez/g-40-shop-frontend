
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Мистический Магазин Мавроди</h1>
          <p className="text-center">Добро пожаловать в наш магазин книг и сувениров. У нас вы найдете уникальные товары, связанные с наследием Сергея Мавроди.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url_to_some_image" />
            <Card.Body>
              <Card.Title>Категория 1</Card.Title>
              <Card.Text>Описание товаров категории 1.</Card.Text>
              <Button variant="primary">Посмотреть</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url_to_some_image" />
            <Card.Body>
              <Card.Title>Категория 2</Card.Title>
              <Card.Text>Описание товаров категории 2.</Card.Text>
              <Button variant="primary">Посмотреть</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="url_to_some_image" />
            <Card.Body>
              <Card.Title>Категория 3</Card.Title>
              <Card.Text>Описание товаров категории 3.</Card.Text>
              <Button variant="primary">Посмотреть</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

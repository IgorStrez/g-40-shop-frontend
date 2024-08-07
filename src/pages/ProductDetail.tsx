// src/pages/ProductDetail.tsx
import React from 'react';
import '../styles/ProductDetail.css';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Пример данных о продукте, которые вы можно заменить на данные из API
  const product = {
    id: parseInt(id!, 10),
    name: "Пример книги",
    description: "Описание книги...",
    price: 500,
    imageUrl: "/path/to/image.jpg"
  };

  return (
    <div className="product-detail-container">
      <ProductDetails
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    </div>
  );
};

export default ProductDetail;

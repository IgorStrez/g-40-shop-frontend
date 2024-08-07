// src/components/ProductDetails.tsx
import React, { useContext } from 'react';
import { CartContext } from '../contectx/CartContext';
import '../styles/ProductDetail.css';


interface ProductDetailsProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id, name, description, price, imageUrl }) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart({ id, name, price, quantity: 1 });
    }
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>{price} руб.</strong></p>
        <button className="btn btn-primary" onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductDetails;

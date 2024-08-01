// src/components/Cart.tsx
import { useContext } from 'react';
import { CartContext } from '../contectx/CartContext';

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Корзина пуста</div>;
  }

  const { cart, removeFromCart } = cartContext;

  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  return (
    <div>
      <h2>Корзина</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.price} руб. x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </div>
      ))}
      <h3>Общая стоимость: {totalPrice} руб.</h3>
    </div>
  );
};

export default Cart;

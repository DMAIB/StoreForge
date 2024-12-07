// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Импортируйте стили для корзины

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleBuy = () => {
    // Здесь вы можете добавить логику для обработки покупки
    console.log('Покупка оформлена!');
    // Например, можно перенаправить на страницу оформления заказа
    // window.location.href = '/checkout'; 
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            </div>
          ))}
          <button className="buy-button" onClick={handleBuy}>Оформить заказ</button> {/* Кнопка "Купить" */}
        </div>
      )}
    </div>
  );
};

export default Cart;

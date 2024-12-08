import React, { useState } from 'react';
import { useCart } from './CartContext';
import './AdminPanel.css'; // Импортируем CSS

const AdminPanel = () => {
  const { addProduct, products, removeProduct, updateProduct } = useCart();
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Если изменяется поле цены, обрабатываем ввод
    if (name === 'price') {
      // Удаляем все символы, кроме цифр
      const numericValue = value.replace(/[^0-9]/g, '');
      // Устанавливаем новое значение с символом рубля
      setNewProduct({
        ...newProduct,
        [name]: numericValue ? `${numericValue} ₽` : ''
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.id || !newProduct.name || !newProduct.price || !newProduct.imageUrl) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Удаляем символ рубля перед отправкой
    const priceWithoutSymbol = newProduct.price.replace(' ₽', '');

    if (isEditing) {
      // Обновляем продукт, включая символ рубля
      updateProduct({ ...newProduct, price: `${priceWithoutSymbol} ₽` });
      setIsEditing(false);
    } else {
      // Добавляем новый продукт с символом рубля
      addProduct({ ...newProduct, price: `${priceWithoutSymbol} ₽` });
    }

    // Сбрасываем форму
    setNewProduct({ id: '', name: '', price: '', description: '', imageUrl: '' });
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setIsEditing(true);
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-panel">
        <h2>{isEditing ? 'Редактировать продукт' : 'Добавить новый продукт'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={newProduct.id}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Название"
            value={newProduct.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Цена"
            value={newProduct.price} 
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Описание"
            value={newProduct.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="URL изображения"
            value={newProduct.imageUrl}
            onChange={handleChange}
            required
          />
          <button type="submit">{isEditing ? 'Сохранить изменения' : 'Добавить продукт'}</button>
        </form>
      </div>

      <div className="product-list-container admin-panel">
        <h2>Список продуктов</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card2">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p> {/* Отображаем цену с символом рубля */}
                <p className="product-description">{product.description}</p>
                <button className="add-to-cart-button2" onClick={() => handleEdit(product)}>Редактировать</button>
                <button className="add-to-cart-button2" onClick={() => removeProduct(product.id)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
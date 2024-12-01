import React from 'react';
import './Products.css'; // Импортируем CSS файл для стилей

const Products = () => {
  const products = [
    { id: 1, name: 'Краски акриловые', price: '700 ₽', description: 'Яркие акриловые краски для рисования на различных поверхностях.', imageUrl: 'https://avatars.mds.yandex.net/get-mpic/1673800/img_id9188399868739307760.jpeg/orig' },
    { id: 2, name: 'Кисти для рисования', price: '350 ₽', description: 'Набор кистей различных размеров для акриловых и масляных красок.', imageUrl: 'https://avatars.mds.yandex.net/i?id=0bd360cb224af7012c8e45d61e9b9faf_l-5896582-images-thumbs&n=13' },
    { id: 3, name: 'Бумага для акварели', price: '1000 ₽', description: 'Специальная бумага для акварели и акрила.', imageUrl: 'https://avatars.mds.yandex.net/get-mpic/7052428/img_id3989026280302142340.jpeg/orig' },
    { id: 4, name: 'Масляные краски', price: '1400 ₽', description: 'Качественные масляные краски для профессиональных художников.', imageUrl: 'https://indasil.club/uploads/posts/2022-12/1669850867_1-indasil-club-p-luchshie-maslyanie-kraski-dlya-zhivopisi-v-1.jpg' },
    { id: 5, name: 'Эскизный блокнот', price: '600 ₽', description: 'Блокнот с белыми страницами для зарисовок и идей.', imageUrl: 'https://i.ebayimg.com/images/g/ZcMAAOSwQRhe~1F~/s-l1600.jpg' },
    { id: 6, name: 'Палитра для смешивания', price: '800 ₽', description: 'Палитра для удобного смешивания красок.', imageUrl: 'https://fb.ru/misc/i/gallery/78264/2758304.jpg' },
    { id: 7, name: 'Гуашь', price: '1200 ₽', description: 'Набор гуашевых красок для ярких и насыщенных картин.', imageUrl: 'https://fkniga.ru/media/product/06/06030204/KA-00101221_03.jpg' },
    { id: 8, name: 'Цветные карандаши', price: '400 ₽', description: 'Набор цветных карандашей для рисования и творчества.', imageUrl: 'https://avatars.mds.yandex.net/i?id=e6d5500bd0c822fe852a4914f261fe50_l-4570529-images-thumbs&n=13' },
    { id: 9, name: 'Фломастеры', price: '500 ₽', description: 'Набор фломастеров с яркими цветами для творчества.', imageUrl: 'https://cdn1.ozone.ru/s3/multimedia-l/6248236221.jpg' },
    { id: 10, name: 'Мелки цветные', price: '300 ₽', description: 'Набор цветных мелков для рисования и творчества.', imageUrl: 'https://i.pinimg.com/originals/b6/af/58/b6af586874dfe9f8ab574c7f07f1a77c.jpg' },
  ];

  return (
    <div>
      <h2>Товары от StoryForge</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

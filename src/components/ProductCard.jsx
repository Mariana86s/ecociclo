import React from 'react';

export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

import React from 'react';

export default function ProductCard({ image, name, price,moverPagina }) {
  return (
    <div className="product-card" onClick={moverPagina}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>₡ {price}</p>
    </div>
  );
}

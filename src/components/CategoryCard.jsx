import React from 'react';

export default function CategoryCard({ icon, name }) {
  return (
    <div className="category-card">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
}

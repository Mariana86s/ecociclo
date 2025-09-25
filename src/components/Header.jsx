import React from 'react';

export default function Header({ title, showRegister }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

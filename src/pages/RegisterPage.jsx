import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
export default function RegisterPage() {
  return (
    <div className='registro'>
      <Header title="Registrarse" showRegister={false} />
      <RegisterForm />
    </div>
  );
}

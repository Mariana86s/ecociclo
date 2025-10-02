import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className='titulo'>
      <Header title="CicloVida" showRegister={true} />
      <LoginForm />
    </div>
  );
}

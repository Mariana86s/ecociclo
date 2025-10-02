import { useEffect,useState } from 'react';
import { AdminComp } from '../components/AdminComp'
import ProductosFormulario from '../components/ProductosFormulario'
import "../styles/AdminPage.css"
import { getData } from '../services/fetch';
import ListaUsuarios from '../components/ListaUsuarios';
const AdminPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    async function fetchUsuarios(){
      const response = await getData("usuarios");
      setUsuarios(response);
    }
    fetchUsuarios();
  },[])
  return (
    <div className='contAdmin'>
      <div className='colIzq'>
        <ProductosFormulario />
      </div>
      <div className='colDer'>
        <AdminComp/>
        <ListaUsuarios usuarios={usuarios}/>
      </div>
    </div>
  )
}

export default AdminPage
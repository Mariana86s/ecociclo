import { useEffect, useState } from "react";
import { AdminComp } from "../components/AdminComp";
import ProductosFormulario from "../components/ProductosFormulario";
import ListaUsuarios from "../components/ListaUsuarios";
import "../styles/AdminPage.css";
import { getData } from "../services/fetch";

const AdminPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      const response = await getData("usuarios");
      setUsuarios(response);
    }
    fetchUsuarios();
    const interval = setInterval(fetchUsuarios, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contAdmin">
      <div className="colIzq">
        <h2 className="section-title">Agregar Producto</h2>
        <ProductosFormulario />
      </div>
      <div className="colDer">
        <AdminComp />
        <div className="lista-usuarios">
          <h2 className="section-title">Usuarios Registrados</h2>
          <ListaUsuarios usuarios={usuarios} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

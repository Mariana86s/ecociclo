import { useEffect, useState } from "react";
import { AdminComp } from "../components/AdminComp";
import ProductosFormulario from "../components/ProductosFormulario";
import ListaUsuarios from "../components/ListaUsuarios";
import "../styles/AdminPage.css";
import { getData } from "../services/fetch";

const AdminPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);

  async function fetchUsuarios() {
    const response = await getData("usuarios");
    setUsuarios(response);
  }

  async function fetchProductos() {
    const response = await getData("productos");
    setProductos(response);
  }

  useEffect(() => {
    fetchUsuarios();
    fetchProductos();
    const interval = setInterval(() => {
      fetchUsuarios();
      fetchProductos();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contAdmin">
      <div className="colIzq">
        <h2 className="section-title">Agregar Producto</h2>
        <ProductosFormulario />
      </div>
      <div className="colDer">
        <AdminComp cantUsuarios={usuarios.length} cantProductos={productos.length} />
        <div className="lista-usuarios">
          <h2 className="section-title">Usuarios Registrados</h2>
          <ListaUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

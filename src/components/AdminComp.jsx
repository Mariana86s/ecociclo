import { useState, useEffect } from "react";
import { getData } from "../services/fetch";
import "../styles/AdminPage.css";

export const AdminComp = () => {
  const [cantUsuarios, setCantUsuarios] = useState(0);
  const [cantProductos, setCantProductos] = useState(0);

  useEffect(() => {
    async function traerDatos() {
      const usuarios = await getData("usuarios");
      setCantUsuarios(usuarios.length);

      const productos = await getData("productos");
      setCantProductos(productos.length);
    }
    traerDatos();
  }, []);

  return (
    <div className="contAdmin">
      <div className="admin-titulo">Panel de Administración</div>
      <div className="admin-metricas">
        <div className="admin-card">
          <span className="admin-label">Usuarios registrados:</span>
          <span className="admin-valor">{cantUsuarios}</span>
        </div>
        <div className="admin-card">
          <span className="admin-label">Productos publicados:</span>
          <span className="admin-valor">{cantProductos}</span>
        </div>
      </div>
    </div>
  );
};

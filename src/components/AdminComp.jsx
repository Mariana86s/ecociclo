import React, { useState, useEffect } from "react";
import { getData } from "../services/fetch";
import "../styles/AdminPage.css";

export const AdminComp = () => {
  const [cantUsuarios, setCantUsuarios] = useState(0);
  const [cantProductos, setCantProductos] = useState(0);

  useEffect(() => {
    let mounted = true;
    async function traerDatos() {
      try {
        const usuarios = await getData("usuarios");
        const productos = await getData("productos");
        if (!mounted) return;
        setCantUsuarios(Array.isArray(usuarios) ? usuarios.length : 0);
        setCantProductos(Array.isArray(productos) ? productos.length : 0);
      } catch (err) {
        console.error(err);
      }
    }
    traerDatos();
    const interval = setInterval(traerDatos, 5000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h3 className="admin-titulo">Panel de Administración</h3>
      </div>
      <div className="admin-metricas">
        <div className="admin-card">
          <span className="admin-label">Usuarios registrados</span>
          <span className="admin-valor">{cantUsuarios}</span>
        </div>
        <div className="admin-card">
          <span className="admin-label">Productos publicados</span>
          <span className="admin-valor">{cantProductos}</span>
        </div>
      </div>
    </div>
  );
};

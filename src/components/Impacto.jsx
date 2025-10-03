import { useEffect, useState } from "react";
import { getData } from "../services/fetch";
import "../styles/impacto.css";

export default function Impacto({ nuevoProducto }) {
  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    async function cargarDatos() {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      const productos = await getData("productos");
      setMisProductos(productos.filter(p => p.idUsuario == usuario.id));
    }
    cargarDatos();
  }, []);

useEffect(() => {
  if (nuevoProducto) {
    const usuarioId = String(JSON.parse(localStorage.getItem("usuario")).id);
    console.log("Nuevo producto recibido", nuevoProducto); 
    if (String(nuevoProducto.idUsuario) === usuarioId) {
      setMisProductos(prev => [...prev, nuevoProducto]);
    }
  }
}, [nuevoProducto]);

  return (
    <div className="impacto-contenedor">
      <div className="impacto-seccion">
        <div className="impacto-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
            alt="Productos"
            className="impacto-icon"
          />
          <h3>Mis productos en venta</h3>
        </div>

        {misProductos.length === 0 ? (
          <p>No tienes productos publicados.</p>
        ) : (
          <div className="impacto-grid">
            {misProductos.map((prod, idx) => (
              <div key={prod.id || idx} className="impacto-card">
                {prod.imagen && (
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="impacto-producto-imagen"
                  />
                )}
                <h4>{prod.nombre}</h4>
                <p>{prod.descripcion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
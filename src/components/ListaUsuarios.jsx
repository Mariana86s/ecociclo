import React from "react";
import { deleteData } from "../services/fetch";

const ListaUsuarios = ({ usuarios, setUsuarios }) => {
  async function eliminarUsuario(id) {
    try {
      await deleteData("usuarios", id);
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Error eliminando usuario:", err);
    }
  }

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="colDer">
          <p>Nombre: {usuario.nombre}</p>
          <p>Correo: {usuario.correo}</p>
          <p>Rol: {usuario.rol}</p>
          <button onClick={() => eliminarUsuario(usuario.id)}>ELIMINAR</button>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuarios;

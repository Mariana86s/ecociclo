import React from 'react'
import { deleteData } from '../services/fetch'

const ListaUsuarios = ({usuarios}) => {
    async function eliminarUsuario(id) {
        const peticion = await deleteData("usuarios",id)
        console.log(peticion);
    }
  return (
    <div>
        {usuarios.map((usuario) => (
            <div key={usuario.id} className="colDer">
                <p>Nombre: {usuario.nombre}</p>
                <p>Correo: {usuario.correo}</p>
                <p>Rol: {usuario.rol}</p>
                <button onClick={()=>eliminarUsuario(usuario.id)}>ELIMINAR</button>
            </div>
        ))}
    </div>
  )
}

export default ListaUsuarios
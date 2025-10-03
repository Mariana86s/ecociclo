import { useState } from "react";
import "../styles/perfil.css";
import ProductosFormulario from "../components/ProductosFormulario";
import Impacto from "../components/Impacto";
import { patchData } from "../services/fetch";

function PerfilPage() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState(usuario.nombre);
  const [descripcion, setDescripcion] = useState(usuario.descripcion || "Descripción no proporcionada");
  const [ubicacion, setUbicacion] = useState(usuario.ubicacion || "Ubicación no proporcionada");
  const [email, setEmail] = useState(usuario.correo);
  const [fechaIngreso, setFechaIngreso] = useState("Enero 2023");
  const [ocultar, setOcultar] = useState(true);
  const [nuevoProducto, setNuevoProducto] = useState(null);

  const handleGuardar = async() => {
    setEditando(false);
    setOcultar(true);
    const objActualizado = {
      nombre,
      descripcion,
      ubicacion
  };
  await patchData("usuarios", objActualizado, usuario.id);
  const usuarioActualizado = { ...usuario, ...objActualizado };
  localStorage.setItem("usuario", JSON.stringify(usuarioActualizado));
  alert("Perfil actualizado correctamente");
  }
  return (
    <div className="perfil-container">
      <div className="perfil-superior">
        <div className="perfil-card">
          <div className="perfil-header">
            <div className="perfil-info">
              {editando ? (
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="perfil-input"
                />
              ) : (
                <h2 className="perfil-nombre">{nombre}</h2>
              )}
              <p className="perfil-rol">{usuario.rol}</p>
            </div>
          </div>

          <div className="perfil-body">
            {editando ? (
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="perfil-textarea"
              />
            ) : (
              <p className="perfil-descripcion">{descripcion}</p>
            )}

            <ul className="perfil-detalles">
              <li>
                <strong>Ubicación:</strong>{" "}
                {editando ? (
                  <input
                    type="text"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    className="perfil-input"
                  />
                ) : (
                  ubicacion
                )}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                {editando ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="perfil-input"
                  />
                ) : (
                  email
                )}
              </li>
              <li>
                <strong>Miembro desde:</strong>{" "}
                {editando ? (
                  <input
                    type="text"
                    value={fechaIngreso}
                    onChange={(e) => setFechaIngreso(e.target.value)}
                    className="perfil-input"
                  />
                ) : (
                  fechaIngreso
                )}
              </li>
            </ul>
          </div>

          {editando ? (
            <button className="perfil-boton" onClick={handleGuardar}>Guardar</button>
          ) : (
            <button className="perfil-boton" onClick={() => {
              setEditando(true);
              setOcultar(false);
            }}>Editar Perfil</button>
          )}
        </div>

        <div className="perfil-formulario">
          {ocultar && (
         <ProductosFormulario onProductoCreado={setNuevoProducto} />
          )}
        </div>
      </div>
      <Impacto nuevoProducto={nuevoProducto} />
    </div>
  );
}

export default PerfilPage;

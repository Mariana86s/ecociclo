import { useState, useEffect } from "react";
import "../styles/InfoProducto.css";
import { getData, postData } from "../services/fetch";

const InfoProducto = ({ img, titulo, descripcion, contacto }) => {
  const [comentario, setComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [listaComentarios, setListaComentarios] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [comentarioEditado, setComentarioEditado] = useState("");

  // Cargar comentarios desde db.json
  async function traerComentarios() {
    const peticion = await getData("comentarios");
    const idProducto = localStorage.getItem("idProducto");
    const filtroComentarios = peticion.filter(
      (p) => p.idProducto == idProducto
    );
    setListaComentarios(filtroComentarios);
  }

  useEffect(() => {
    traerComentarios();
  }, []);

  // Subir nuevo comentario
  async function subirComentario() {
    const objComentario = {
      nombre,
      comentario,
      idProducto: localStorage.getItem("idProducto"),
    };
    await postData("comentarios", objComentario);
    setNombre("");
    setComentario("");
    traerComentarios(); // Recargar después de enviar
  }

  // Iniciar edición
  function iniciarEdicion(index) {
    setModoEdicion(index);
    setComentarioEditado(listaComentarios[index].comentario);
  }

  // Guardar edición (solo local)
  function guardarEdicion(index) {
    const actualizados = [...listaComentarios];
    actualizados[index].comentario = comentarioEditado;
    setListaComentarios(actualizados);
    setModoEdicion(null);
    setComentarioEditado("");
    // Si quieres guardar en db.json, deberías usar PUT aquí
  }

  // Eliminar comentario de db.json
  async function eliminarComentario(idComentario) {
    await fetch(`http://localhost:3000/comentarios/${idComentario}`, {
      method: "DELETE",
    });
    await traerComentarios(); // Recargar después de eliminar
  }

  return (
    <div className="info-contenedor">
      <div className="info-producto">
        <div className="imagen-producto">
          <img src={img} alt={titulo} />
        </div>
        <div className="titulo-producto">{titulo}</div>
        <div className="descripcion-producto">{descripcion}</div>
        <button className="boton-contacto">{contacto}</button>
      </div>

      <div className="comentarios">
        <h3>Comentarios</h3>

        <form className="form-comentario">
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <textarea
            rows="3"
            placeholder="Escribe tu comentario..."
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          />
          <button type="button" onClick={subirComentario}>
            Enviar comentario
          </button>
        </form>

        {listaComentarios.map((item, index) => (
          <div className="comentario" key={item.id}>
            <strong>{item.nombre}</strong>
            {modoEdicion === index ? (
              <div className="acciones-edicion">
                <textarea
                  rows="3"
                  value={comentarioEditado}
                  onChange={(e) => setComentarioEditado(e.target.value)}
                />
                <div className="botones-edicion">
                  <button
                    className="boton-editar"
                    onClick={() => guardarEdicion(index)}
                  >
                    Guardar
                  </button>
                  <button
                    className="boton-editar"
                    onClick={() => setModoEdicion(null)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p>{item.comentario}</p>
                <button
                  className="boton-editar"
                  onClick={() => iniciarEdicion(index)}
                >
                  Editar
                </button>
                <button
                  className="boton-eliminar"
                  onClick={() => eliminarComentario(item.id)}
                >
                  Eliminar
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoProducto;

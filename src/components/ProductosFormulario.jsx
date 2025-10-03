import { useState } from "react"
import { postData } from "../services/fetch"
import "../styles/productosFormulario.css";

const ProductosFormulario = ({ onProductoCreado }) => {
  const [nombreProducto, setNombreProducto] = useState("")
  const [urlImagen, setUrlImagen] = useState("")
  const [precioProducto, setPrecio] = useState("")
  const [categoriaProducto, setCategoria] = useState("")
  const [descripcionProducto, setDescripcion] = useState("")
  const [pesoProducto, setPeso] = useState("")
  const [direccion, setDireccion] = useState("")

  const handleSubmit = async () => {
    const obj = {
      nombre: nombreProducto,
      imagen: urlImagen,
      precio: precioProducto,
      categoria: categoriaProducto,
      descripcion: descripcionProducto,
      peso: pesoProducto,
      direccion: direccion,
      idUsuario: JSON.parse(localStorage.getItem("usuario")).id,
      correoUsuario: JSON.parse(localStorage.getItem("usuario")).correo
    }

    const creado = await postData("productos", obj)
    console.log("Producto enviado correctamente", creado);

    if (creado) {
      if (onProductoCreado) {
        console.log("Producto enviado al perfil:", creado);
        onProductoCreado(creado);
      }
      alert("Producto agregado correctamente");
      setNombreProducto("")
      setUrlImagen("")
      setPrecio("")
      setCategoria("")
      setDescripcion("")
      setPeso("")
      setDireccion("")
    }
  }

  return (
    <div className="productocard">
      <input type="text" placeholder='Nombre producto' value={nombreProducto} onChange={(e) => setNombreProducto(e.target.value)} />
      <input type="text" placeholder='URL de la imagen' value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
      <input type="text" placeholder='Precio' value={precioProducto} onChange={(e) => setPrecio(e.target.value)} />
      <select value={categoriaProducto} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Seleccione una categoría</option>
        <option value="carton">Cartón</option>
        <option value="plastico">Plástico</option>
        <option value="vidrio">Vidrio</option>
        <option value="electronicos">Electrónicos</option>
        <option value="otros">Otros</option>
      </select>
      <input type="text" placeholder='Descripción' value={descripcionProducto} onChange={(e) => setDescripcion(e.target.value)} />
      <input type="text" placeholder='Peso (kg)' value={pesoProducto} onChange={(e) => setPeso(e.target.value)} />
      <textarea placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default ProductosFormulario

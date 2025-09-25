import { useState } from "react"
import { postData } from "../services/fetch"
import "../styles/productosFormulario.css";

const ProductosFormulario = () => {
    const [nombreProducto,setNombreProducto] = useState("")
    const [urlImagen,setUrlImagen] = useState("")
    const [precioProducto,setPrecio] = useState ("")
    const [categoriaProducto,setCategoria] = useState("")
    const [descripcionProducto,setDescripcion] = useState ("")
    const [pesoProducto,setPeso] = useState ("")

  const handleSubmit = async () => {
  const obj = {
    nombre: nombreProducto,
    imagen: urlImagen,
    precio: precioProducto,
    categoria: categoriaProducto,
    descripcion: descripcionProducto,
    peso: pesoProducto
  }

  await postData("productos",obj)
  alert("Producto enviado correctamente")
}

    return (
    <div className="productocard">
        <input type="text" placeholder='Nombre producto' className="btn" onChange={(e)=>setNombreProducto(e.target.value)}/>
        <input type="text" placeholder='URL de la imagen' className="btn" onChange={(e)=>setUrlImagen(e.target.value)}/>
        <input type="text" placeholder='Precio' className="btn" onChange={(e)=>setPrecio(e.target.value)}/>
        <input type="text" placeholder='Categoría' className="btn" onChange={(e)=>setCategoria(e.target.value)}/>
        <input type="text" placeholder='Descripción' className="btn" onChange={(e)=>setDescripcion(e.target.value)}/>
        <input type="text" placeholder='Peso (kg)' className="btn" onChange={(e)=>setPeso(e.target.value)}/>

        <button onClick={handleSubmit}>Enviar</button>
    </div>
  )
}

export default ProductosFormulario
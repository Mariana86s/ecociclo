import { useState } from "react"
import { postData } from "../services/fetch"
import { Link } from "react-router-dom"
export default function RegisterForm() {
  const [nombreUsuario,setNombreUsuario] = useState("")
  const [correoUsuario,setCorreoUsuario] = useState("")
  const [claveUsuario,setClaveUsuario] = useState("")

  async function agregarUsuario(params) {
      const obj = {
      nombre: nombreUsuario,
      correo: correoUsuario,
      clave: claveUsuario,
      rol: "usuario"

      }
    await postData("usuarios", obj)
    alert("Usuario registrado con exito")
  }


  return (
    <div className="form-container">
      <h2>Crear una cuenta</h2>
      <input type="text" placeholder="Nombre" onChange={(e)=>setNombreUsuario(e.target.value)}/>
      <input type="email" placeholder="Correo" onChange={(e)=>setCorreoUsuario(e.target.value)}/>
      <input type="password" placeholder="Contraseña" onChange={(e)=>setClaveUsuario(e.target.value)}/>
     <button onClick={agregarUsuario}>Registrarse</button>
     <Link to={"/"}>Ir a inicio</Link>
    </div>
  )
}

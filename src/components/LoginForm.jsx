import { Link, useNavigate } from 'react-router-dom';
import "../styles/LoginForm.css"
import { useState } from 'react';
import { getData } from '../services/fetch.js';
export default function LoginForm() {
    const [correo,setCorreo] = useState("")
    const [clave,setClave] = useState("")
    const navigate = useNavigate()

    async function validarUsuario() {
        const usuariosGuardados = await getData("usuarios")
        console.log(usuariosGuardados);
        
        const validarUsuario = usuariosGuardados.find((usuario)=>usuario.correo == correo && usuario.clave == clave && usuario.rol == "usuario")
        const validarUsuarioAdmin = usuariosGuardados.find((usuario)=>usuario.correo == correo && usuario.clave == clave && usuario.rol == "admin")

        if (validarUsuario) {
            localStorage.setItem("idUsuario",validarUsuario.id);
            localStorage.setItem("usuario",JSON.stringify(validarUsuario));
            navigate("/principal")
        }
         if (validarUsuarioAdmin) {
            localStorage.setItem("idUsuario",validarUsuarioAdmin.id);
            localStorage.setItem("usuario",JSON.stringify(validarUsuarioAdmin));
            navigate("/admin")
        }
    }

    return (
        <div className="form-container">
            <h2>Iniciar Sesión</h2>
            <div className='contenedor-inputs'>
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="Correo" onChange={(e)=>setCorreo(e.target.value)}/>
                <label htmlFor="">Contraseña</label>
                <input type="password" placeholder="Contraseña" onChange={(e)=>setClave(e.target.value)}/>
                <button onClick={validarUsuario}>Entrar</button>
            </div>
            <p className='enlace'>¿No tienes cuenta? <Link to={"/registro"}>Crea una aquí</Link></p>
        </div>
    );
}

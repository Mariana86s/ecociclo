import React, { useEffect, useState } from 'react'
import InfoProducto from '../components/InfoProducto'
import { getData } from '../services/fetch'

const Producto = () => {
    const [productoIndividual, setProductoIndividual] = useState([])

    useEffect(() => {
        async function traerProducto() {
            const peticion = await getData("productos")
            const filtroProducto = peticion.filter((prod)=>prod.id == localStorage.getItem("idProducto"))
            setProductoIndividual(filtroProducto[0])
            console.log(filtroProducto);
            
        }
        traerProducto()
    }, [])
    return (
        <div>
            <InfoProducto
                titulo={productoIndividual.nombre} img={productoIndividual.imagen}
                descripcion={productoIndividual.categoria} contacto={productoIndividual.correoUsuario}
            />
        </div>
    )
}

export default Producto
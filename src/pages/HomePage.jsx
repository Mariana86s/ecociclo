import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import plasticoImg from '../img/plastico.jpg';
import metalesImg from '../img/metales.jpg';
import papelImg from '../img/papel.webp';
import "../styles/estilo.css";
import { useEffect, useState } from 'react';
import { getData } from '../services/fetch';

export default function HomePage() {
  const [productosReci,setProductosReci] = useState([])


  useEffect(()=>{
    async function traerProductos() {
       const lista = await getData("productos")
       setProductosReci(lista)
    }
    traerProductos()
  },[])
  return (
    <div className="home">
      <input type="text" placeholder="Buscar Productos..." className="search-bar" />
      <button className="search-button">Buscar</button>

      <h2 className="section-title">Categorías</h2>
      <div className="categories">
        <CategoryCard icon={plasticoImg} name="Plásticos" />
        <CategoryCard icon={metalesImg} name="Metales" />
        <CategoryCard icon={papelImg} name="Cartón y Papel" />
      </div>

      <h2 className="section-title">Productos Destacados</h2>
      <div className="products">
        {productosReci.map((reciclables)=>{
          return(
             <ProductCard key={reciclables.id} name={reciclables.nombre} image={reciclables.imagen} price={reciclables.precio}/>
          )
        })}
      </div>
    </div>
  );
}

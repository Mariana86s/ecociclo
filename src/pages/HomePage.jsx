import ProductCard from '../components/ProductCard';
import perfilIcon from '../img/perfil.jpg';
import "../styles/estilo.css";
import "../styles/perfil.css";
import { useEffect, useState } from 'react';
import { getData } from '../services/fetch';
import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [productosReci, setProductosReci] = useState([]);
  const [productosCat, setProductosCat] = useState([]);
  const [productplastico, setProductoPlastico] = useState([]);
  const [productvidrio, setProductoVidrio] = useState([]);
  const [productelectronicos, setProductoElectronicos] = useState([]);
  const [productotros, setProductoOtros] = useState([]);
  const [categoria, setCategoria] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    async function traerProductos() {
      const lista = await getData("productos");
      const filtroplastico = lista.filter((prod) => prod.categoria === "plastico");
      const filtrovidrio = lista.filter((prod) => prod.categoria === "vidrio");
      const filtroelectronicos = lista.filter((prod) => prod.categoria === "electronicos");
      const filtrootros = lista.filter((prod) => prod.categoria === "otros");
      const filtrocarton = lista.filter((prod) => prod.categoria === "carton");
      setProductosCat(filtrocarton);
      setProductoPlastico(filtroplastico);
      setProductoVidrio(filtrovidrio);
      setProductoElectronicos(filtroelectronicos);
      setProductoOtros(filtrootros);
      setProductosReci(lista);
    }
    traerProductos();
  }, []);

  return (
    <div className="home">
      <div className="perfil-access">
        <Link to="/perfil">
          <img
            src={perfilIcon}
            alt="Ir al perfil"
            className="perfil-icon"
          />
        </Link>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Buscar Productos..." className="search-bar" />
        <button className="search-button">Buscar</button>
      </div>

      <h2 className="section-title">Categorías</h2>
      <select name="" id="" onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Seleccione una categoría</option>
        <option value="carton">Carton</option>
        <option value="plastico">Plástico</option>
        <option value="vidrio">Vidrio</option>
        <option value="electronicos">Electrónicos</option>
        <option value="otros">Otros</option>
      </select>
      <div className="products">
        {categoria === "carton" && productosCat.map((reciclables) => (
          <ProductCard
            key={reciclables.id}
            name={reciclables.nombre}
            image={reciclables.imagen}
            price={reciclables.precio}
            moverPagina={() => {
              navigate("/producto")
              localStorage.setItem("idProducto", reciclables.id)
            }}
          />
        ))}
      </div>
      <div className="products">
        {categoria === "plastico" && productplastico.map((reciclables) => (
          <ProductCard
            key={reciclables.id}
            name={reciclables.nombre}
            image={reciclables.imagen}
            price={reciclables.precio}
            moverPagina={() => {
              navigate("/producto")
              localStorage.setItem("idProducto", reciclables.id)
            }}
          />
        ))}
      </div>
      <div className="products">
        {categoria === "vidrio" && productvidrio.map((reciclables) => (
          <ProductCard
            key={reciclables.id}
            name={reciclables.nombre}
            image={reciclables.imagen}
            price={reciclables.precio}
            moverPagina={() => {
              navigate("/producto")
              localStorage.setItem("idProducto", reciclables.id)
            }}
          />
        ))}
      </div>
      <div className="products">
        {categoria === "electronicos" && productelectronicos.map((reciclables) => (
          <ProductCard
            key={reciclables.id}
            name={reciclables.nombre}
            image={reciclables.imagen}
            price={reciclables.precio}
            moverPagina={() => {
              navigate("/producto")
              localStorage.setItem("idProducto", reciclables.id)
            }}
          />
        ))}
      </div>
      <div className="products">
        {categoria === "otros" && productotros.map((reciclables) => (
          <ProductCard
            key={reciclables.id}
            name={reciclables.nombre}
            image={reciclables.imagen}
            price={reciclables.precio}
            moverPagina={() => {
              navigate("/producto")
              localStorage.setItem("idProducto", reciclables.id)
            }}
          />
        ))}
      </div>
      {categoria === "" && (
        <>
          <h2 className="section-title">Productos Destacados</h2>
          <div className="products">
            {productosReci.map((reciclables) => (
              <ProductCard
                key={reciclables.id}
                name={reciclables.nombre}
                image={reciclables.imagen}
                price={reciclables.precio}
                moverPagina={() => {
                  navigate("/producto")
                  localStorage.setItem("idProducto", reciclables.id)
                }}
              />
            ))}
          </div>
          </>
      )}
    </div>
  );
}

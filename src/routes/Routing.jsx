import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import Perfil from "../pages/PerfilPage"; 
import Producto from "../pages/Producto";
import Impacto from "../components/Impacto";


function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/registro" element={<RegisterPage/>}/>
                <Route path="/principal" element={<HomePage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/producto" element={<Producto />} />
                <Route path="/impacto" element={<Impacto />} />
                
            </Routes>
        </Router>
    )
}
export default Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";

function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/registro" element={<RegisterPage/>}/>
                <Route path="/principal" element={<HomePage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </Router>
    )
}
export default Routing
import "../styles/AdminPage.css";

export const AdminComp = ({ cantUsuarios, cantProductos }) => {
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h3 className="admin-titulo">Panel de Administración</h3>
      </div>
      <div className="admin-metricas">
        <div className="admin-card">
          <span className="admin-label">Usuarios registrados</span>
          <span className="admin-valor">{cantUsuarios}</span>
        </div>
        <div className="admin-card">
          <span className="admin-label">Productos publicados</span>
          <span className="admin-valor">{cantProductos}</span>
        </div>
      </div>
    </div>
  );
};

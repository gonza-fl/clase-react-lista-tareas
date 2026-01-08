import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">AppLogo</Link>

      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/">Inicio</Link>

        {isAuthenticated ? (
          <>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <button onClick={logout} className="btn btn-outline-danger btn-sm ms-2">
              Salir
            </button>
          </>
        ) : (
          <Link className="nav-link" to="/login">Ingresar</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

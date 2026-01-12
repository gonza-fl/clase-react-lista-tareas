import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> {/* Se muestra en todas las páginas */}
      <main className="flex-grow-1 container py-5">
        {/* Aquí se inyecta la página que estemos visitando (Home, Login, etc.) */}
        <Outlet />
      </main>
      <footer className="bg-light text-center py-3 mt-auto">
        <p className="text-muted mb-0">© 2024 Task Manager Project</p>
      </footer>
    </div>
  );
}

export default Layout;

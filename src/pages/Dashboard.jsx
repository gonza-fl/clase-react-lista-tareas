import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Dashboard Privado</h2>
      <div className="alert alert-success">
        Bienvenido de nuevo, <strong>{user.name}</strong>
      </div>
      <p>Aquí irían tus tareas protegidas.</p>
    </div>
  );
};

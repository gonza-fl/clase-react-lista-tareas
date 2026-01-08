import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializamos con null (no logueado) o leemos de localStorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const login = async (email, password) => {
    try {
      const response = await fetch(`http://localhost:3004/users?email=${email}&password=${password}`);
      if (!response.ok) throw new Error('Error al conectar con el servidor');

      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true };
      } else {
        return { success: false, message: 'Credenciales incorrectas' };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error de conexión' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

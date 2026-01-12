import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Inicializamos con null (no logueado) o leemos de localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const loginActualizado = async (email, password) => {
    try {
      //Actualizamos la url del login para apuntar al json-server-auth
      const responseNueva = await fetch("http://localhost:3004/login", {
        //el fetch antiguo por defendo es get pero necesitamos hacer un post para enviar el email y password
        method: "POST",
        //el header es para indicar que el body es un json
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      //manejamos los errores
      if (!responseNueva.ok) {
        const errorData = await responseNueva.json();
        throw new Error(errorData || "Error al conectar con el servidor");
      }
      // leemos la respuesta
      const data = await responseNueva.json();

      //verificamos la respuesta
      if (data.accessToken) {
        const user = data.user;
        setUser(user);
        //guardamos el usuario en localStorage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", data.accessToken);
        return { success: true };
      } else {
        return { success: false, message: "Credenciales incorrectas" };
      }
    } catch (error) {
      console.error(error);
      return { success: false, message: "Email o contraseña incorrectos" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login: loginActualizado, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

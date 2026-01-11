import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuth();
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        const respuesta = await fetch("http://localhost:3004/tasks");
        const datos = await respuesta.json();
        setTareas(datos);
      } catch (error) {
        console.log("Error al obtener tareas", error);
      }
    };
    obtenerTareas();
  }, []);

  const agregarTarea = async () => {
    if (!nuevaTarea.trim()) return;

    try {
      const response = await fetch("http://localhost:3004/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: nuevaTarea,
          completed: false,
        }),
      });

      if (response.ok) {
        const tareaCreada = await response.json();
        setTareas([...tareas, tareaCreada]);
        setNuevaTarea("");
      }
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  return (
    <div>
      <h2>Dashboard Privado</h2>
      <div className="alert alert-success">
        Bienvenido de nuevo, <strong>{user.name}</strong>
      </div>
      <p>Aquí irían tus tareas protegidas.</p>
      <div>
        <h3>Tareas</h3>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Agregar nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button className="btn btn-primary" onClick={agregarTarea}>
          Agregar Tarea
        </button>
        <div className="list-group mt-4">
          {tareas.map((tarea) => (
            <div
              key={tarea.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{tarea.title}</span>
              <span className="badge bg-primary rounded-pill">
                {tarea.completed ? "Completada" : "Pendiente"}
              </span>
            </div>
          ))}

          {/* Si la lista esta vacía, mostramos un mensaje */}
          {tareas.length === 0 && (
            <p className="text-muted mt-3">No hay tareas aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

export function ListaTareas() {
  // lista de tareas
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender componentes en React" },
    { id: 2, texto: "Entender el uso de useState" },
    { id: 3, texto: "Renderizar listas con .map()" },
  ]);

  // Estado para capturar lo del usuario
  const [nuevaTareaTexto, setNuevaTareaTexto] = useState("");

  // Funcion para agregar una tarea nueva sin alteral el estado original
  const agregarTarea = (e) => {
    e.preventDefault();

    if (nuevaTareaTexto.trim() === "") return;

    const nuevaTarea = {
      id: Date.now(),
      texto: nuevaTareaTexto,
    };

    setTareas([...tareas, nuevaTarea]);
    setNuevaTareaTexto("");
  };

  // Funcion para eliminar una tarea por su id
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>

      {/* Formulario */}
      <form
        onSubmit={agregarTarea}
        style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={nuevaTareaTexto}
          onChange={(e) => setNuevaTareaTexto(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            background: "#646cff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Agregar
        </button>
      </form>

      {/* Lista renderizada con .map */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#fff",
              border: "1px solid #ddd",
              padding: "10px 15px",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <span>{tarea.texto}</span>
            <button
              onClick={() => eliminarTarea(tarea.id)}
              style={{
                background: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

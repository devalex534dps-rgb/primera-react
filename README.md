**Estudiante:** Edwin Alexis Esperanza Chávez

---

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?
* **Props (Propiedades):** Son datos que se pasan a un componente desde su padre. Son inmutables dentro del componente hijo, es decir, el componente no puede modificarlas; solo las utiliza para mostrar información o configurar su comportamiento.
* **State (Estado):** Es información interna que pertenece exclusivamente al componente. A diferencia de las props, el estado es mutable; el componente puede cambiarlo mediante funciones específicas (como `useState`), lo que provoca que React re-renderice el componente para actualizar la interfaz.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Es fundamental porque ayuda a React a identificar qué elementos de la lista han cambiado, han sido agregados o eliminados. Al asignar una `key` única y estable a cada elemento, React optimiza el proceso de renderizado en lugar de recrear toda la lista desde cero, mejorando significativamente el rendimiento de la aplicación.

### c)
`useState` es un "hook" de React que permite "recordar" datos dentro de un componente funcional. Nos devuelve dos cosas: el valor actual del estado y una función para actualizarlo.

* **Ejemplo:** Se usa en el componente `ListaTareas.jsx` para almacenar la lista de tareas pendientes. Cuando el usuario agrega una tarea nueva, la cual llama a otro useState para que automaticamente se actualice la pantalla para mostrar la lista nueva.

---
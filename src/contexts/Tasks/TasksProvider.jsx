import { useLocalStorage } from "../../hooks/useLocalStorage";
import TasksContext from "./TasksContext";
import { toastMensaje } from "../../lib/toast";


export function TasksProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const getLastId = (tasks) => {
    return tasks.reduce((maxId, task) => {
      return task.id > maxId ? task.id : maxId;
    }, 0);
  };

  const addTask = (text) => {
    const id = getLastId(tasks) + 1;
    const newTask = { id, tarea: text, hecho: false };
    setTasks([...tasks, newTask]);
    toastMensaje("Tarea agregada", "ok");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, hecho: !task.hecho } : task
      )
    );
    toastMensaje("Tarea actualizada");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toastMensaje("Tarea eliminada", "error");
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
}
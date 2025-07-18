import { useContext } from "react";
import TasksContext from "./TasksContext";

export function useTasks({ hecho } = {}) {
  const { tasks, toggleTask, removeTask, addTask } = useContext(TasksContext);

  const tasksFiltradas = hecho !== undefined ? (hecho ? tasks.filter((t) => t.hecho) : tasks.filter((t) => !t.hecho)) : tasks;

  return {
    tasks: tasksFiltradas,
    toggleTask,
    removeTask,
    addTask,
  };  
}

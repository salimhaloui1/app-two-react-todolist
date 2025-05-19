import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    // ⚠️ Charger les tâches depuis localStorage lors de l'initialisation du state
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Erreur lors du chargement de localStorage:", error);
      return [];
    }
  });

  // ✅ Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erreur lors de la sauvegarde dans localStorage:", error);
    }
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks((prev) => [...prev, input.trim()]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4 py-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6">📝 Ma To-Do List</h1>
      <div className="max-w-md mx-auto">
        <TodoForm input={input} setInput={setInput} onAdd={addTask} />
        <TodoList tasks={tasks} onDelete={deleteTask} />
      </div>
    </div>
  );
}

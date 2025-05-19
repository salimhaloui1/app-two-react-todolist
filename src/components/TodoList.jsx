import { AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-600 dark:text-gray-400">Aucune tâche</p>;
  }

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <TodoItem
            key={task + index}
            task={task}
            index={index}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

import { motion } from "framer-motion";

export default function TodoItem({ task, index, onDelete }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded shadow"
    >
      <span>{task}</span>
      <button
        onClick={() => onDelete(index)}
        className="text-red-600 hover:text-red-800 transition"
        aria-label={`Supprimer ${task}`}
      >
        Supprimer
      </button>
    </motion.li>
  );
}

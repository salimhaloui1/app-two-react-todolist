export default function TodoForm({ input, setInput, onAdd }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd();
      }}
      className="flex gap-2 mb-4"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche"
        className="flex-grow p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white transition"
      />
      <button
        type="submit"
        className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
      >
        Ajouter
      </button>
    </form>
  );
}

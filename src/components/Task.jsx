export default function Task({ task, deleteTask, editTask }) {
  return (
    <div className="task" onClick={() => editTask(task.id)}>
      <p className="task-title">{task.title}</p>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        Excluir
      </button>
    </div>
  );
}

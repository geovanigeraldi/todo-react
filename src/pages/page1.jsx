import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "../components/Task";

function Page1() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState("");

  function addTask() {
    if (taskTitle) {
      const newTask = {
        id: uuid(),
        title: taskTitle,
      };

      const tasksCopy = [...tasks];
      tasksCopy.unshift(newTask);
      setTasks(tasksCopy);
      localStorage.removeItem("@tasks");
      localStorage.setItem("@tasks", JSON.stringify(tasksCopy));
      setTaskTitle("");
    }
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    localStorage.removeItem("@tasks");
    localStorage.setItem("@tasks", JSON.stringify(filteredTasks));
    setTasks(filteredTasks);
  }

  function editTask(id) {
    const toEdit = tasks.filter((task) => task.id === id)[0];
    setTaskTitle(toEdit.title);
    setEditingId(toEdit.id);
    setEdit(true);
  }

  function saveUpdatedTask() {
    const newTasks = tasks.filter((task) => task.id !== editingId);
    newTasks.unshift({ id: editingId, title: taskTitle });
    setTasks(newTasks);
    localStorage.removeItem("@tasks");
    localStorage.setItem("@tasks", JSON.stringify(newTasks));
    setEdit(false);
    setTaskTitle("");
    setEditingId("");
  }

  useEffect(() => {
    const localTasks = localStorage.getItem("@tasks");
    if (!!localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  return (
    <div className="app">
      <div className="form">
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="button" onClick={edit ? saveUpdatedTask : addTask}>
          {edit ? "Atualizar" : "Salvar"}
        </button>
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Page1;
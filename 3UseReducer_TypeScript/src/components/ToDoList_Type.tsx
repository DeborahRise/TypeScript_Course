import { useEffect, useState } from "react";

interface TodoProps {
  id: number;
  task: string;
  done: boolean

}

const ToDoList_Type = () => {
  const [tasks, setTasks] = useState<TodoProps[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const AddTask = () => {

    const newTask: TodoProps = {id: Date.now(), task: taskInput, done: false};
    setTasks([...tasks, newTask]);
    setTaskInput("");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
  }

  const DeleteTask = (id: number) => {
    const updatedTasks: TodoProps[] = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const Checked = (id: number) => {
    const checkedTasks: TodoProps[] = tasks.map((task) => (
      task.id === id ? {...task, done: !task.done} : task

    ))
    setTasks(checkedTasks)
    localStorage.setItem("tasks", JSON.stringify(checkedTasks))
  }

  const ClearTask = () => {
    setTasks([])
    localStorage.setItem("tasks", JSON.stringify([]))
  }

  useEffect(() => {
    const renderTask: TodoProps[] = JSON.parse(localStorage.getItem("tasks") || "[]")

    setTasks(renderTask)
  }, [])


  return (
    <div>
      <h1>TypeScript Todo List </h1>

      <div style={{display: "flex", justifyContent: "space-between"}}>
        <input type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)} />

        <button style={{backgroundColor: "darkgreen", color: "white"}} onClick={AddTask}>AddTask</button>
        <button style={{backgroundColor: "red", color: "white"}} onClick={ClearTask}>Clear</button>

      </div>

      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox"
          checked={task.done}
          onChange={()=> Checked(task.id)} />

          <label style={{textDecorationLine: task.done ? "line-through" : "none"}}>{task.task}</label>
          <button style={{backgroundColor: "yellow", color: "black"}} onClick={() => DeleteTask(task.id)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default ToDoList_Type
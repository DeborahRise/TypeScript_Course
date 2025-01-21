import React, { useState } from "react";
import { useEffect } from "react";

const ToDoList = () => {
  // const [tasks, setTasks] = useState<string[]>([]);
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // const addTask = (task: string) => {
  const addTask = () => {
    //  const totalTasks: string[] =  task.push(task);
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      taskInput: taskInput.trim(),
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const clearTask = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  // const deleteTask = (id: number) => {
  const deleteTask = (id) => {
    const updatedTask = tasks.filter((task) => task?.id !== id);
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };
  const checked = (id) => {
    const checkedTask = tasks.map((task) => 
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(checkedTask);
    localStorage.setItem("tasks", JSON.stringify(checkedTask));
  };
  useEffect(() => {
    const renderTask = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(renderTask);
  }, []);

  return (
    <div >
      <div>
        <h1>List Of Things To Do</h1>
      </div>
      <div style={{ borderWidth: 2, borderRadius: 20, borderColor: "black", borderStyle: "solid", padding: 3}}>

      <div style={{display: "flex", justifyContent: "space-between", gap: 20}}>
        <input
        style={{padding: 10, margin: 10, borderRadius: 7, borderWidth: 1 }}
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(event) => setTaskInput(event?.target?.value)}
        />
        <button style={{backgroundColor: "darkgreen", color: "white", marginLeft: 5, padding: 5}} onClick={addTask}>Add Task</button>
        <button style={{backgroundColor: "red", color: "white", marginLeft: 5, padding: 5}} onClick={clearTask}>Clear</button>
      </div>

      {tasks.map((task) => (
        <div key={task?.id}
        style={{ padding: 10, margin: 10, display: "flex",justifyContent: "space-between", flexDirection: "row"}}
        >
          <input
            type="checkbox"
            checked={task?.done}
            onChange={() => checked(task.id)}
            style={{padding: 10}}
          />
          <label
            style={{ textDecorationLine: task?.done ? "line-through" : "none" }}
            htmlFor="task.task"
          >
            {task?.taskInput}
          </label>
          <button style={{backgroundColor: "#ff0070", color: "white"}} onClick={() => deleteTask(task?.id)}>X</button>
        </div>
      ))}
      </div>

    </div>
  );
};

export default ToDoList;

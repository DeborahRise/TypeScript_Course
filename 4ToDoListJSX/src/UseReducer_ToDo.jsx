import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const initState = {
  tasks: [],
  taskInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUTTASK":
      return { ...state, taskInput: action.payload };

    case "ADDTASK":
      if (!state.taskInput.trim()) return state;
      const newTask = { id: Date.now(), task: state.taskInput.trim(), done: false };
      const updatedTask = [...state.tasks, newTask];

      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      return { ...state, tasks: updatedTask, taskInput: "" };

    case "DELETETASK":
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    case "CHECKED":
      const checkedTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      localStorage.setItem("tasks", JSON.stringify(checkedTasks));
      return { ...state, tasks: checkedTasks };

    case "CLEAR":
      localStorage.setItem("tasks", JSON.stringify([]));
      return { ...state, tasks: [] };

    case "RENDERTASKS":
      return { ...state, tasks: action.payload };

    default:
      throw new Error();
  }
};

const UseReducer_ToDo = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    useEffect(() => {
        const renderTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        dispatch({ type: "RENDERTASKS", payload: renderTasks });
    }, []);
    
    const { tasks, taskInput } = state;
  return (
    <div>
      <h1>UseReducer ToDo List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(event) =>
            dispatch({ type: "INPUTTASK", payload: event.target.value })
          }
        />

        <button onClick={() => dispatch({type: "ADDTASK"})}>+</button>
        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
      </div>
      {tasks.map((task) => (
        <div key={task.id}>
        <input type="checkbox"
        checked={task.done}
        onChange={() => dispatch({type: "CHECKED", payload: task.id})} />

        <label htmlFor=""style={{textDecoration: task.done ? "line-through" : "none"}}>{task?.task}</label>

        <button onClick={() => dispatch({type: "DELETETASK", payload: task.id})}>X</button>
      </div>
      ))}
      
    </div>
  );
};

export default UseReducer_ToDo;

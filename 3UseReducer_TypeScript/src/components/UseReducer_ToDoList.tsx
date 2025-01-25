import { useEffect, useReducer } from "react";

interface TodoProps {
  id: number;
  task: string;
  done: boolean;
}

const initState = {
  tasks: [] as TodoProps[],
  taskInput: "",
};

interface ACTION {
  type: string;
  payload?: TodoProps //| TodoProps[] | string;
}

const reducer = (state: typeof initState, action: ACTION) => {
  switch (action.type) {
    case "ADDTASK":
      const newTask: TodoProps = {
        id: Date.now(),
        task: state.taskInput.trim(),
        done: false,
      };
      const addedTasks: TodoProps[] = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(addedTasks));

      return { ...state, tasks: addedTasks, taskInput: "" };

    case "DELETETASK":
      const filteredTasks: TodoProps[] = state.tasks.filter(
        (task) => task.id !== action.payload?.id
      );

      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };

    case "CLEAR":
      localStorage.setItem("tasks", JSON.stringify([]));
      return { tasks: [] };
    case "CHECKED":
      const checkedTask: TodoProps[] = state.tasks.map((task) =>
        task.id === action.payload?.id ? { ...task, done: !task.done } : task
      );
      localStorage.setItem("tasks", JSON.stringify(checkedTask));
      return { ...state, tasks: checkedTask };

    case "INPUT_TASK":
      return { ...state, taskInput: action.payload };

    case "RENDERTASK":
      return { ...state, asks: action.payload };

    default:
        throw new Error()
  }
};

const UseReducer_ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const renderTask: TodoProps[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    dispatch({type: "RENDERTASK", payload: renderTask})
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
            dispatch({ type: "INPUT_TASK", payload: event.target.value })
          }
        />

        <button onClick={() => dispatch({type: "ADDTASK"})}>+</button>
        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
      </div>
      {tasks.map((task) => (
        <div key={task.id}>
        <input type="checkbox"
        checked={task?.done}
        onChange={() => dispatch({type: "CHECKED", payload: task.id})} />

        <label htmlFor=""style={{textDecoration: task.done ? "line-through" : "none"}}>{task?.task}</label>

        <button onClick={() => dispatch({type: "DELETETASK", payload: task.id})}>X</button>
      </div>
      ))}
      
    </div>
  )
};

export default UseReducer_ToDoList;

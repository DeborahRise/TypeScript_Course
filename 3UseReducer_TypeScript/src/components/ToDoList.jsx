import React, { useState } from "react";


const ToDoList = () => {
    // const [tasks, setTasks] = useState<string[]>([]);
    const [tasks, setTasks] = useState([]);

    // const addTask = (task: string) => {
      const addTask = (task) => {
      //  const totalTasks: string[] =  task.push(task);
      const totalTasks =  task.push(task);
       AsyncStorage.setItem(setItem, totalTasks)
    }

    // const deleteTask = (id: number) => {
      const deleteTask = (id) => {
        tasks.forEach(task, id => {
            const afterdelete = tasks.filter(task => task.id !== id)
        });
        
        AsyncStorage.setItem(setItem, afterdelete)
    } 
  return (
    <div>
      <div>
        <h1>List Of Things To Do</h1>
      </div>

      <div>
        <input type="text" placeholder="Enter task" 
        onChange={(event) => setTasks(event?.target?.value)}
        value={""}/>
        <button onClick={() => addTask(tasks)}>Add Task</button>
      </div>

      <div>
        {tasks.map((task, id) => (
          <>
          <input type="checkbox" />
          <label htmlFor=""> {task} </label>
          <button onClick={deleteTask(id)}>X</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

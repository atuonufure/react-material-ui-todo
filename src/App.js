import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import "./style.css";

export default function App() {
  const [tasksArray, setTasksArray] = useState([]);
  const [task, setTask] = useState("");
  const addTask = event => {
    event.preventDefault();
    if (task.trim().length > 0) {
      setTasksArray([...tasksArray, task]);
      setTask("");
    }
  };
  const deleteTask = id => {
    const newTasksArray = [...tasksArray];
    newTasksArray.splice(id, 1);
    setTasksArray(newTasksArray);
  };
  return (
    <form className="wrapper" onSubmit={addTask}>
      <Input
        id="standard-basic"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <div className="button-wrapper">
        <div className="button">
          <Button variant="contained" color="primary" onClick={addTask}>
            Add
          </Button>
        </div>
        <div className="button">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setTasksArray([])}
            disabled={tasksArray.length > 0 ? false : true}
          >
            Clear all
          </Button>
        </div>
      </div>
      <div className="tasks-column">
        {tasksArray.map((task, id) => (
          <div className="task-wrapper" key={id}>
            <div className="task-text">{task}</div>
            <Button variant="contained" onClick={() => deleteTask(id)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </form>
  );
}

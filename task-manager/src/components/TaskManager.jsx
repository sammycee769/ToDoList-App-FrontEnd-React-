import React, { useEffect, useState } from 'react';
import styles from "./TaskManager.module.css";
import {mockTaskManager}  from "./mockTaskManager.jsx";
const TaskManager = () => {
  const [tasks,setTasks] = useState([]);
   useEffect(
        ()=>{
            async function fetchTasks() {
            try{
                const data = await mockTaskManager();
                setTasks(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    fetchTasks();
            },[]
    )

   const [input,setInput] = useState("");
   const handleSubmit = (event) =>{
    event.preventDefault();
    if(!input.trim())
      return;
    const newTask = {
        text: input.trim(),
        completed: false
    }
    setTasks([...tasks, newTask]);
    setInput("");
   };

   const handleDelete = (index) =>{
    const newTasks = tasks.filter((_, item) => item !== index);
    setTasks(newTasks);
   };

  const handleComplete = (index) => {
  const newTasks = tasks.map((task, item) =>
    item === index ? { ...task, completed: !task.completed } : task
  );
  setTasks(newTasks);
};

  const[searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form
                    onSubmit={handleSubmit}
                    id="add-task"
                    className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                  >
                    <div className="col-12">
                      <input
                        type="text"
                        id="task-input"
                        className="form-control"
                        placeholder="Add task..."
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                      />
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                        Add
                      </button>
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        id="search-tasks"
                        className="form-control"
                        placeholder="Search tasks..."
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                  </form>

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th>Todo item</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="task-list">
                      {tasks
                        .filter((task) =>
                          task.text
                            .toLowerCase()
                            .startsWith(searchTerm.toLowerCase()),
                        )
                        .map((task, index) => (
                          
                          <tr key={index}>
                            <td
                              className={task.completed ? styles.completed : ""}
                            >
                              {task.text}
                            </td>
                            <td>
                              {task.completed ? "Completed" : "In progress"}
                            </td>
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                              <button
                                className="btn btn-success btn-sm ms-1"
                                onClick={() => handleComplete(index)}
                              >
                                {task.completed ? "Undo" : "Complete"}
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskManager;
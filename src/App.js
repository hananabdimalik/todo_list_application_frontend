import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header/Header.js';
import AddaTask from './AddaTask/AddaTask.js';
import Footer from './Footer/Footer.js';
import CurrentTasks from './CurrentTasks/CurrentTasks.js';
import Tasks from './Tasks/Tasks.js';



function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
  
    axios.get("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch(err => {
        console.log("Error", err)
      });
  
  }, []);


  const deleteTask = (id) => {

    axios.delete(`https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
        const filteredTasks = tasks.filter((task) => {
          return task.TaskId !== id;
        });
        setTasks(filteredTasks);
      })
      .catch(err => {
        console.log("API Error", err)
      });
  };

  const completeTask = (id) => {
    axios.put(`https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, {
      Completed: true,
      Status: 100
    }
    )
      .then((response) => {
        console.log("Updated status", response)
     
        const newTask = tasks.map((task) => {
          if (task.TaskId === id) {
            task.Status = 100;
            task.Completed = true
          }
          return task;
        });

        setTasks(newTask)
      })
      .catch((err) => {
        console.log("Error updating Task", err)
      });
  }


  const addNewTask = (text, date) => {
    axios.post("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks", {
      Description: text,
      Deadline: date,
      Status: 0
    })
      .then(response => {
        const newTask = response.data;
        const newTasks = [...tasks, newTask]
        console.log(newTasks)
        setTasks(newTasks)
      })
      .catch(err => {
        console.log("Error creating task", err)
      });
  }

  const toggleTask = (id) => {
    const newTask = tasks.map((task) => {
      if (task.TaskId === id) {
        task.selected = !task.selected;
        console.log(task)
      }
      return task;
    });
    setTasks(newTask)
  }



  const selectStatus = (event) => {
    const updatedTask = tasks.map((task) => {
      console.log(task)
      if (task.selected) {
        task.Status = event.target.value
      }
      return task;
    })
    setTasks(updatedTask)
  }


  const updateTaskStatus = (id) => {

    axios.put(`https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, {
      Status: 100
    })
      .then((response) => {
        console.log("updated", response)
        const newTask = tasks.map((task) => {
          if (task.TaskId === id) {
            task.selected = !task.selected
          }
          return task;
        });

        setTasks(newTask)
      })
      .catch((err) => {
        console.log("Error updating Task", err)
      })
  }



  return (
    <div className="container A">
      <div className="App">
        <section>
          <Header/>
          <Footer/>
        </section>
        <main>
          <section className="container">
            <div className="container">
              <AddaTask addNewTaskFunc={addNewTask} />
              <div className="container">
                <CurrentTasks count={tasks.length} tasks={tasks}
                  statusUpdate={selectStatus}
                />
                {tasks.map((task) => {
                  return < Tasks
                    key={task.TaskId}
                    deleteTaskFunc={deleteTask}
                    completeTaskFunc={completeTask}
                    text={task.Description}
                    Status={task.Status}
                    toggleSelected={toggleTask}
                    updateTaskStatusFunc={updateTaskStatus}
                    Deadline={task.Deadline}
                    id={task.TaskId}
                  />
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default App;

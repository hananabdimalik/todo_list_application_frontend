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

  //only run this code once when the componenets first mounts
  useEffect(() => {
    //Fetch tasks from the Backend (GET)
    axios.get("https://giovvfsmk9.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch(err => {
        console.log("Error", err)
      });
    //this array would normally contain the values that may change, and React would run the above code when the value changes
    //this is called 'Array of dependencies  
  }, []);

  //Issue a Delete a task from the task from the tasks arrat (based on ID), and update the state with the new, short array
  // any function that updates state should live where the state live
  const deleteTask = (id) => {
    //Issue a DELETE request to my API via postman
    //if resolves, THEN I will filter my tasks on the frontend to remove the task with the given ID
    //if rejects, I'm not ganna filer

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
        //Create a new array of uptaded tasks, where the completed property of the matching task has been updated
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
        //create a new array of tasks, which includes this new task
        //Avoid mutating arrays or object(push, pop, splice, sort) 
        const newTasks = [...tasks, newTask]
        console.log(newTasks)
        setTasks(newTasks)
      })
      // .then(response => {
      //   const newTask = tasks.map((task) => {
      //     if (task.TaskId === TaskId) {
      //       task.selected = !task.selected;
      //       console.log(task)
      //     }
      //     return task;
      //   });
      //   setTasks(newTask)
      // })
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
        //Create a new array of uptaded tasks, where the completed property of the matching task has been updated
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

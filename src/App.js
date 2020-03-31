import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import AddaTask from './AddaTask/AddaTask.js';
import Footer from './Footer/Footer.js';
import CurrentTasks from './CurrentTasks/CurrentTasks.js';
import Tasks from './Tasks/Tasks.js';
import Notes from './Notes/Notes.js';


function App() {
  const [tasks, setTasks] = useState([
    { text: "Organise Bookcase", Status: "20 ", Deadline: "2020/04/01", id: 1 },
    { text: "Tidy room", Status: "40", Deadline: "2020/04/11", id: 2 },
    { text: " Post mail", Status: "60  ", Deadline: "2020/04/20", id: 3 },
    { text: "Hoover carpet", Status: "100", Deadline: "2020/04/30", id: 4 },
  ]);



  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    })

    setTasks(filteredTasks);
  }

  const completeTask = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id ) {
        task.status = 100;
      }
      return task;
    });
    setTasks(newTask)
  }

  const addNewTask = (text, date) => {
const newTask = {
  text: text, 
  Deadline: date,
  id: Math.random() * 1000,
}  
 const newTasks = [...tasks, newTask]
setTasks(newTasks)
  }


  return (
    <div className="App">
      <section>
        <Header />
        <Footer />
      </section>
      <main>
        <section className="container">
          <div className="container">
            <AddaTask addNewTaskFunc={addNewTask}/>
            <div className="container">
            <CurrentTasks count={tasks.length} />
            {tasks.map((task) => {
              return < Tasks
                key={task.id}
                deleteTaskFunc={deleteTask}
                completeTaskFun={completeTask}
                text={task.text}
                Status={task.Status}
                Deadline={task.Deadline}
                id={task.id}
              />
            })}
          </div>
          </div>
        </section>
        <section className="container">
          <Notes  />
        </section>
      </main>
    </div>
  );
}
// addNotesFunc={addNotes}
export default App;

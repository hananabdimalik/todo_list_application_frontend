import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import AddaTask from './AddaTask/AddaTask.js'
import Footer from './Footer/Footer.js'
import CurrentTasks from './CurrentTasks/CurrentTasks.js';
import Tasks from './Tasks/Tasks.js'
import Notes from './Notes/Notes.js'

function App() {
  const [tasks, setTasks] = useState([
    { text: "Organise Bookcase", Status: "20 %", Deadline: "2020/04/01", id: 1 },
    { text: "Tidy room", Status: "40 %", Deadline: "2020/04/11", id: 2 },
    { text: " Post mail", Status: "60 % ", Deadline: "2020/04/20", id: 3 },
    { text: "Hoover carpet", Status: "100%", Deadline: "2020/04/30", id: 4 },
  ]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
     return task.id !== id;
    })

    setTasks(filteredTasks);
  } 
  // const deleteCompleteTask =(id) => {
  //   const filteredTasks = tasks.filter((task) => {
  //     if (task.complete === complete){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   })
  //   setTasks(filteredTasks)
  // }

  return (
    <div className="App">
      <Header />
      <Footer />
      <main>
        <AddaTask />
        <CurrentTasks count={tasks.length} />
        <div className=" container">
          {tasks.map((task) => {
            return < Tasks
              key={task.id}
              deleteTaskFunc={deleteTask}
              text={task.text}
              Status={task.Status}
              Deadline={task.Deadline}
              id={task.id}
            />
          })}
        </div>
        <Notes />
      </main>
    </div>
  );
}

export default App;

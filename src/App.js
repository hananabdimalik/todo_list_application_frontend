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
    { text: "Organise Bookcase", Status: 20, Deadline: "2020/04/01", id: 1, selected: false },
    { text: "Tidy room", Status: 40, Deadline: "2020/04/11", id: 2, selected: false },
    { text: "Post mail", Status: 60, Deadline: "2020/04/20", id: 3, selected: false },
    { text: "Hoover carpet", Status: 100, Deadline: "2020/04/30", id: 4, selected: false },
  ]);

  // console.dir(setTasks);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    })

    setTasks(filteredTasks);
  }

  const completeTask = (id) => {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        task.Status = 100;
        console.log(task)
      }
      return task;
    });
    console.log(newTask);
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

  const toggleTask =(id) =>{
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        task.selected = !task.selected;
        console.log(task)
      }
      return task;
    });
    console.log(newTask);
    setTasks(newTask)
  }

  const updateTaskStatus = (id, status) =>{

  }

  //----------------------------------------------//
  const [notes, setNotes] = useState([
    { text: "Add notes here " },
  ])


  const addNewNotes = (text) => {
    const newNote = {
      text: text,
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

const setStatusOfSelectedTask = (Status) => {

}

//set status of selected tasks to a given status 


//.....................




  // add a boolean - 'selected' property to your task object
  // when checkbox is checked it turns true

  // when status dropdown is changed 
  //that would loop through array, check 'checked' status
  // update status key of each that are true

  const updateStatus = (id) => {


    // const newStatus = {
    //   text: 
    // }
    // setTasks(newStatus)
  }

  const selectedCheckBox = (id) => {
    // eg id = 3
    // tasks = array
    //loop through array looking for specific id 
    // if statement to check id
    //if false, move on, else change selected to true
  }



  return (
    <div className="container A">
    <div className="App">
        <section>
          <Header />
          <Footer />
        </section>
        <main>
          <section className="container">
            <div className="container">
              <AddaTask addNewTaskFunc={addNewTask} />
              <div className="container">
                <CurrentTasks count={tasks.length} tasks={tasks} />
                {tasks.map((task) => {
                  return < Tasks
                    key={task.id}
                    deleteTaskFunc={deleteTask}
                    completeTaskFun={completeTask}
                    text={task.text}
                    Status={task.Status}
                    toggleSelected={toggleTask}
                    Deadline={task.Deadline}
                    id={task.id}
                  />
                })}
              </div>
            </div>
          </section>
          <section className="container">
            {/* {notes.map((note) =>{
return < Notes 
text = {notes.text}/>
          })} */}
            <Notes
              addNewNotesFun={addNewNotes}
              text={notes.text} />
          </section>
        </main>
      </div>
    </div>
  );
}
// addNotesFunc={addNotes}
export default App;

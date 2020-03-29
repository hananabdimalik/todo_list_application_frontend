import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import AddaTask from './AddaTask/AddaTask.js'
import Footer from './Footer/Footer.js'
import CurrentTasks from './CurrentTasks/CurrentTasks.js';
import Tasks from './Tasks/Tasks.js'
import Notes from './Notes/Notes.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <main>
        <AddaTask />
        <CurrentTasks />
        < Tasks text="Organise Bookcase" Status ="20 %" Deadline ="2020/04/01"/>
        < Tasks text="Tidy room" Status="40 %" Deadline ="2020/04/11"/>
        < Tasks text =" Post mail" Status = "60 " Deadline ="2020/04/20"/>
        < Tasks text ="Hoover carpet" Status ="80 %" Deadline ="2020/04/30"/>
        <Notes />
      </main>
    </div>
  );
}

export default App;

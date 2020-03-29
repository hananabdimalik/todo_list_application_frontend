import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import AddaTask from './AddaTask/AddaTask.js'
import CurrentTasks from './CurrentTasks/CurrentTasks.js';
import Tasks from './Tasks/Tasks.js'
import Notes from './Notes/Notes.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
      <main>
        <AddaTask />
        <CurrentTasks />
        < Tasks />
        < Tasks />
        < Tasks />
        < Tasks />
        <Notes />
      </main>
    </div>
  );
}

export default App;

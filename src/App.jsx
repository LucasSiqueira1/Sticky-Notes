import React, {useState} from 'react';
import "./global.css"
import {Task} from './components/Task/Task';
import {AddTask} from './components/AddTask/AddTask';

function App() {
  return (
    <>
      <div className="container">
        <Task/>
      </div>
    </>

  )
}

export default App;
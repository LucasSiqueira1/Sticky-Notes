import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./global.css"

import { Task } from './components/Task/Task';
import { Header } from './components/Header/Header';
import { InfoTask } from './components/InfoTask/InfoTask';


function App() {
  return (
    <>
      <Router>
        <div className="container">
        <Header/>
          <Routes>
            <Route path="/" element={<Task />}/>
            <Route path="/infoTask" element={<InfoTask />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
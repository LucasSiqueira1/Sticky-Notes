import React, { useState } from 'react';
import "./styles.css"
import { AddTask } from '.././AddTask/AddTask';
import { InfoTask } from '.././InfoTask/InfoTask';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export const Task = () => {
    const [task, setTask] = useState([
        {
            id: 1,
            title: "Ver a plataforma do Skore",
            completed: false,
        },
        {
            id: 2,
            title: "Cursos Alura",
            completed: false,
        },
        {
            id: 3,
            title: "Iniciar estudos do Ignite Lab",
            completed: false,
        },
        {
            id: 4,
            title: "Tirar Inline Breadcrumb",
            completed: false,
        },
        {
            id: 5,
            title: "Exercício do Claudino",
            completed: false,
        }
    ]);

    const newTask = (taskTitle) => {
        setTask([...task,{
            id: uuidv4(),
            title: taskTitle,
            completed: false,
        }])
    }


    const handleCompleted = (taskId) => {
        const newTask = task.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed }
            }
            return task;
        })
        setTask(newTask)
    }

    const handleDelete = (taskId) => {
        const newTask = task.filter(task => task.id !== taskId)
        setTask(newTask)
    }


    return (
        <div >
            {task.map(task => (
                <>
                    <div key={task.id}>
                        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
                            <div className="task-title" onClick={() => handleCompleted(task.id)}>
                                {task.title}
                            </div>
                            <button className="remove-task-button" onClick={() => handleDelete(task.id)} > X</button>
                            
                            <Link
                                to={{
                                    pathname: "/infoTask",
                                    search: `${task.title}`,
                                }}
                                
                            > <div className="remove-task-button" >!</div> </Link>
                        </div>
                    </div>
                </>
            ))}
            <AddTask props = {newTask} />

        </div>
    )
}
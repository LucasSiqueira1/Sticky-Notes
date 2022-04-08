import React, { useState } from 'react';
import "./styles.css"
import { AddTask } from '.././AddTask/AddTask';
import { v4 as uuidv4 } from 'uuid';

export const Task = () => {
    const [task, setTask] = useState([
        {
            id: 1,
            title: "Ver a plataforma do Skore.",
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
        setTask([...task, {
            id: uuidv4(),
            title: taskTitle,
            completed: false,
        }])
    }

    console.log(task)

    //console.log(task[1].completed)

    const handleCompleted = (taskId) => {
        const newTask = task.map(task => {
            if(task.id === taskId){
                return { ...task, completed: !task.completed }
            }
            return task;
        })

        setTask(newTask)
    } 


    return (
        <div >
            {task.map(task => (
                <div key={task.id} className="task-container" onClick={() => handleCompleted(task.id)} style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
                    {task.title} {task.completed}
                </div>
            ))}

            <AddTask props={newTask} />
        </div>
    )
}
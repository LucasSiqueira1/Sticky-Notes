import React, { useState } from 'react';
import "./styles.css"

export const Task = ({ props }) => {
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
            completed: true,
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

    return (
        <div >
            {task.map(task => (
                <div key={task.id} className="task-container">
                    {task.title} {task.completed}
                </div>
            ))}
        </div>
    )
}
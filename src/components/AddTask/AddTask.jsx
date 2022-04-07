import React, {useState} from 'react';
import "./styles.css"
import {AddButton} from '.././AddButton/AddButton';

export const AddTask = ({props}) => {
    const [data, setData] = useState('');

    const handleData = (e) => {
        setData(e.target.value);
    }

    const handleNewTask = () => {
        props(data)
    }

    return (
        <div className ="container-input">
            <input type="text" onChange ={handleData} value={data}/>
            <AddButton onClick={handleNewTask} >Adicionar</AddButton>
        </div>
    )
}
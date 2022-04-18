import React, {useState} from 'react';
import "./styles.css"
import {AddButton} from '.././AddButton/AddButton';

export const AddTask = ({props}) => {
    const [data, setData] = useState('')

    const handleInputValue =(e) => {
        setData(e.target.value)
    }

    const handleAddTask = () => {
        if(data){
            props(data)
        }else{
            alert("Digite uma tarefa")
        }
        setData('')
    }

    return (
        <div className ="container-input">
            <input type="text" onChange={handleInputValue} value={data} />
            <AddButton onClick={handleAddTask}> Adicionar</AddButton>
        </div>
    )
}